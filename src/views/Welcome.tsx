import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue';
import { RouterView, useRoute, useRouter } from 'vue-router';
import { useSwipe } from '../hooks/useSwipe';
import { throttle } from '../shared/throttle';
import s from './Welcome.module.scss'

const routeMap: Record<string, string> = {
  welcome1: '/welcome/2',
  welcome2: '/welcome/3',
  welcome3: '/welcome/4',
  welcome4: '/start',
}

export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement>()
    const { direction, swiping } = useSwipe(main, {
      beforeStart: e => { e.preventDefault() }
    })

    const route = useRoute();
    const router = useRouter();

    const replace = throttle(() => {
      const name = (route.name || 'Welcome1').toString()
      const path = routeMap[name];
      router.replace(path)
    }, 500);

    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        replace()
      }
    })

    return () => <div class={s.wrapper}>
      <header>
        <svg>
          <use xlinkHref='#mangosteen'></use>
        </svg>
        <h1>Mangosteen</h1>
      </header>
      <main class={s.main} ref={main}>
        <RouterView name="main">
          {
            ({ Component: component }: { Component: VNode }) =>
              <Transition
                enterFromClass={s.slide_fade_enter_from}
                enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to}
                leaveActiveClass={s.slide_fade_leave_active}
              >
                {component}
              </Transition>
          }
        </RouterView>
      </main>
      <footer class={s.footer}>
        <RouterView name='footer' />
      </footer>
    </div>
  }
})
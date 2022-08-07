import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue';
import { RouterView } from 'vue-router';
import { useSwipe } from '../hooks/useSwipe';
import s from './Welcome.module.scss'

export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement | null>(null)
    const { direction, swiping } = useSwipe(main)
    watchEffect(() => {
      console.log(swiping.value, direction.value)
    })

    return () => <div class={s.wrapper}>
      <header>
        <svg>
          <use xlinkHref='#mangosteen'></use>
        </svg>
        <h1>山竹记账</h1>
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
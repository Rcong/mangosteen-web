import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router';
import s from './Welcome.module.scss'
import logo from 'src/assets/icons/mangosteen.svg'

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => <div class={s.wrapper}>
      <header>
        <img src={logo} />
        <h1>山竹记账</h1>
      </header>
      <main class={s.main}>
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
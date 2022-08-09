import { defineComponent } from "vue";
import styles from './Button.module.scss';

interface Props{
  onClick: (e: MouseEvent) => void
}

export const Button = defineComponent<Props>({
  setup: (props, context) => {
    return () => <button class={styles.button}>
      { context.slots.default?.() }
    </button>
  }
})
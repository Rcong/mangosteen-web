import { FunctionalComponent } from 'vue';
import s from './Welcome.module.scss';
import { RouterLink } from 'vue-router';

export const SecondActions: FunctionalComponent = () =>
  <div class={s.actions}>
    <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
    <RouterLink to="/welcome/3" >下一页</RouterLink>
    <RouterLink to="/start" >跳过</RouterLink>
  </div>

SecondActions.displayName = 'SecondActions'
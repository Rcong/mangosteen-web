import { FunctionalComponent } from "vue";
import s from "./Welcome.module.scss";
import { RouterLink } from "vue-router";

export const ForthActions: FunctionalComponent = () => (
  <div class={s.actions}>
    <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
    {/* <RouterLink to="/start" >完成</RouterLink> */}
    <RouterLink to="/welcome/1" >下一页</RouterLink>
    <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
  </div>
);

ForthActions.displayName = 'ForthActions'
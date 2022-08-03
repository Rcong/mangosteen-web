import { FunctionalComponent } from 'vue';
import s from './WelcomeLayout.module.scss';
import chart from '../../assets/icons/chart.svg';
import { WelcomeLayout } from './WelcomeLayout'
import { RouterLink } from 'vue-router';

export const Third: FunctionalComponent = () =>
  <WelcomeLayout>
    {{
      icon: () => <img class={s.icon} src={chart} />,
      title: () => <h2>每日提醒<br />不遗漏每一笔账单</h2>,
      buttons: () => <>
        <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
        <RouterLink to="/welcome/4" >下一页</RouterLink>
        <RouterLink to="/start" >跳过</RouterLink>
      </>
    }}
  </WelcomeLayout>
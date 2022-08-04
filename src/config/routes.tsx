import { RouteRecordRaw } from 'vue-router';
import { First } from 'src/components/welcome/First';
import { FirstActions } from 'src/components/welcome/FirstActions';
import { Second } from 'src/components/welcome/Second';
import { SecondActions } from 'src/components/welcome/SecondActions';
import { Third } from 'src/components/welcome/Third';
import { ThirdActions } from 'src/components/welcome/ThirdActions';
import { Forth } from 'src/components/welcome/Forth';
import { ForthActions } from 'src/components/welcome/ForthActions';
import { Welcome } from 'src/views/Welcome';

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      { path: '', redirect: '/welcome/1' },
      { path: '1', components: { main: First, footer: FirstActions } },
      { path: '2', components: { main: Second, footer: SecondActions }, },
      { path: '3', components: { main: Third, footer: ThirdActions }, },
      { path: '4', components: { main: Forth, footer: ForthActions }, },
    ]
  }
]
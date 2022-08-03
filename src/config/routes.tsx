import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Forth } from "../components/welcome/Forth";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: Welcome,
    name: 'main',
    children: [
      { path: '', redirect: '/welcome/1' },
      { path: '1', components: { main: First } },
      { path: '2', components: { main: Second }, },
      { path: '3', components: { main: Third }, },
      { path: '4', components: { main: Forth }, },
    ]
  }
]
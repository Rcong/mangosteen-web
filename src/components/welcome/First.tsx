import { FunctionalComponent } from 'vue';
import s from './Welcome.module.scss';
import pig from '../../assets/icons/pig.svg';

export const First: FunctionalComponent = () =>
  <div class={s.card}>
    <svg>
      <use xlinkHref='#pig'></use>
    </svg>
    <h2>会挣钱<br/>还要会省钱</h2>
  </div>

First.displayName = 'First'
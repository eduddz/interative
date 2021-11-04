import { Header } from "./components/Header";
import { Main } from "./components/Main";

import styles from './styles.module.scss';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
    </div>
  );
}
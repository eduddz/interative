
import styles from './styles.module.scss';

export function Header() {
    return(
        <header className={styles.header}>
            <h1>Simple, traffic-basedd pricing</h1>
            <p>Sing-up for our 30-day trial. <br/>
            No credit card required</p>
        </header>
    )
}
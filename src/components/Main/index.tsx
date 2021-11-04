import { useState } from 'react';
import styles from './styles.module.scss';
import checkImg from '../../assets/icon-check.svg';

export function Main() {
    const [value, setValue] = useState('16');
    const [color, setColor] = useState(true);
    return(
        <main className={styles.main}>
            <span>100K PAGEVIEWS</span>
            <input className={styles.range} value={value} onChange={(e) => {
                setValue(e.target.value)
            }} type="range" min="0" max="100" />

            <div className={styles.cash}>
                <span>${value}.00</span>/month
            </div>
            <div className={styles.billing}>
                <p>Monthly Billing</p>

                {
                    color ? 
                    <div 
                        className={styles.gray}
                        onClick={() => setColor(!color)}
                    >
                        <div />
                    </div>
                    :
                    <div 
                        className={styles.green}
                        onClick={() => setColor(!color)}
                    >
                        <div />
                        <span>-25%</span>
                    </div>
                }

                <p>Yearly Billing</p>
            </div>
            
            <hr />

            <ul>
                <li>
                    <img src={checkImg} />
                    Unlimited websites
                </li>
                <li>
                    <img src={checkImg} />
                    100% data ownership
                </li>
                <li>
                    <img src={checkImg} />
                    Email reports
                </li>
            </ul>

            <button>Start my trial</button>
        </main>
    )
}
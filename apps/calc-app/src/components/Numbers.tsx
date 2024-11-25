import Number from "./Number"
import styles from './Numbers.module.css';

export default function Numbers({onTypeNumber}: Readonly<{onTypeNumber: (n: number) => void}>) {
    return (
        <div className={styles.numbers}>
            {Array.from({length: 10}).map((_, i) => <Number n={i} onClick={onTypeNumber} key={i} className={i === 0 ? styles.zero : ''} />)}
        </div>
    )
}

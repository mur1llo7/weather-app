import styles from './ErrorMessage.module.css'

function ErrorMessage ({ message }) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>{message}</p>
        </div>
    );
}

export default ErrorMessage;
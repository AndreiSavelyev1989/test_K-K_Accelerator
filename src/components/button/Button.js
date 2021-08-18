import styles from "./Button.module.css";

export const Button = ({value, callback}) => {
    return (
        <>
            <button
                className={styles.btn}
                onClick={callback}
                value={value}>{value}</button>
        </>
    )
}
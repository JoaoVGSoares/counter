import styles from "./Button.module.css";

function Button({ handleClick, icon }) {
  return (
    <button className={styles.button} onClick={handleClick}>
      {icon}
    </button>
  );
}

export default Button;

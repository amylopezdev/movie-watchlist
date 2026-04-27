import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.wrapper} role="status" aria-label="Loading content">
      <div className={styles.spinner} aria-hidden="true" />
      <span className={styles.label}>Loading...</span>
    </div>
  );
};

export default Loading;

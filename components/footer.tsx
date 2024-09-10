import styles from "../pages/request-now-page.module.css";

const CustomFooter = () => {
  return (
    <div className={styles.requestNowPage1Inner}>
      <div className={styles.frameParent8}>
        <div className={styles.whatIsDplContainer}>
          <b
            className={styles.whatIsDpl4}
          >{`Customized Message Defined In `}</b>
        </div>
        <div className={styles.fullLogo2Parent}>
          <img
            className={styles.fullLogo2}
            loading="lazy"
            alt=""
            src="/full-logo-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomFooter;

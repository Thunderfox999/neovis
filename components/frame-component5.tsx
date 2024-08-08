import type { NextPage } from "next";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <div className={[styles.logoContainerParent, className].join(" ")}>
      <header className={styles.logoContainer}>
        <div className={styles.logoBackgroundParent}>
          <div className={styles.logoBackground}>
            <img
              className={styles.logoShapeIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className={styles.logoTitle}>
            <a className={styles.whatIsDpl}>Welcome</a>
          </div>
          <div className={styles.fullLogo1Wrapper}>
            <img
              className={styles.fullLogo1}
              loading="lazy"
              alt=""
              src="/full-logo-1@2x.png"
            />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <a className={styles.whatIsDpl1}>{`Property : XYZ 52 `}</a>
            <a className={styles.whatIsDpl2}>Room No : BK505</a>
          </div>
        </div>
      </header>
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src="/rectangle-17.svg"
      />
    </div>
  );
};

export default FrameComponent5;

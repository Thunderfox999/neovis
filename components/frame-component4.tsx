import type { NextPage } from "next";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <header className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.requestIconWrapper}>
                <img
                  className={styles.requestIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className={styles.dPLQuestion}>
                <a className={styles.whatIsDpl}>Welcome</a>
              </div>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <div className={styles.fullLogo1Wrapper}>
                <img
                  className={styles.fullLogo1}
                  loading="lazy"
                  alt=""
                  src="/full-logo-1@2x.png"
                />
              </div>
            </div>
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
      <div className={styles.rectangleGroup}>
        <div className={styles.frameInner} />
        <div className={styles.colorOverlayWrapper}>
          <img
            className={styles.colorOverlayIcon}
            loading="lazy"
            alt=""
            src="/color-overlay-1.svg"
          />
        </div>
        <a className={styles.whatIsDpl3}>Back</a>
      </div>
    </section>
  );
};

export default FrameComponent4;

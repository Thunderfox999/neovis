import type { NextPage } from "next";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <div className={[styles.xmlid2Parent, className].join(" ")}>
      <img
        className={styles.xmlid2Icon}
        loading="lazy"
        alt=""
        src="/xmlid-2.svg"
      />
      <img
        className={styles.xmlid2Icon1}
        loading="lazy"
        alt=""
        src="/xmlid-2.svg"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.whatIsDplParent}>
          <div className={styles.whatIsDpl}>Write Your Issues*</div>
          <div className={styles.vectorParent}>
            <img className={styles.frameItem} alt="" src="/rectangle-36.svg" />
            <div className={styles.whatIsDpl1}>Type Your Issues</div>
          </div>
        </div>
        <div className={styles.whatIsDpl2}>Upload Photos*</div>
        <div className={styles.rectangleGroup}>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/rectangle-37@2x.png"
          />
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-376.svg"
              />
              <div className={styles.frameWrapper}>
                <img
                  className={styles.frameChild1}
                  loading="lazy"
                  alt=""
                  src="/group-378.svg"
                />
              </div>
            </div>
            <div className={styles.frameContainer}>
              <button className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <b className={styles.whatIsDpl3}>Submit</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;

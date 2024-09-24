import type { NextPage } from "next";
import styles from "./frame-component10.module.css";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: NextPage<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.multiLevelWrapper, className].join(" ")}>
      <div className={styles.multiLevel}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.groupWrapper}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-3@2x.png"
            />
          </div>
          <div className={styles.whatIsDpl}>Terrible</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/group-367@2x.png"
          />
          <div className={styles.whatIsDpl1}>Poor</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper}>
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/group-366@2x.png"
            />
          </div>
          <div className={styles.whatIsDpl}>Medium</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;

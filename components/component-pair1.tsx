import type { NextPage } from "next";
import styles from "./component-pair1.module.css";

export type ComponentPair1Type = {
  className?: string;
};

const ComponentPair1: NextPage<ComponentPair1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.componentPair, className].join(" ")}>
      <div className={styles.componentPairChild} />
      <img
        className={styles.componentPairItem}
        loading="lazy"
        alt=""
        src="/group-407.svg"
      />
      <div className={styles.componentPairInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.whatIsDpl}>{`Count :  01 `}</div>
          <div className={styles.frameWrapper}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-289-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPair1;

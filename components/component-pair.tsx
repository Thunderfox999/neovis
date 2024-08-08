import type { NextPage } from "next";
import styles from "./component-pair.module.css";

export type ComponentPairType = {
  className?: string;
};

const ComponentPair: NextPage<ComponentPairType> = ({ className = "" }) => {
  return (
    <div className={[styles.componentPair, className].join(" ")}>
      <div className={styles.componentPairChild} />
      <img
        className={styles.componentPairItem}
        loading="lazy"
        alt=""
        src="/group-404.svg"
      />
      <div className={styles.componentPair1}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.whatIsDplContainer}>
            <span className={styles.count}>{`Count :  `}</span>
            <span className={styles.span}>01</span>
            <span>{` `}</span>
          </div>
          <div className={styles.componentPair2}>
            <img
              className={styles.componentPairInner}
              loading="lazy"
              alt=""
              src="/group-289@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPair;

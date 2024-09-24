import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
  group289?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  propFlex,
  group289,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={frameDivStyle}>
      <div className={styles.frameChild} />
     <div className={styles.frameContainer}>
      <div className={styles.frameParent}>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/group-407.svg"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.whatIsDpl}>{`Count :  01 `}</div>
            <div className={styles.frameContainer}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src={group289}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.whatIsDplWrapper}>
          <div className={styles.whatIsDpl1}>Product ID - OD45620000358645</div>
        </div>
        <div className={styles.whatIsDpl2}>Bottled Water | Lorem</div>
        <div className={styles.whatIsDplContainer}>
          <div className={styles.whatIsDpl3}>Lorem ipsum dolor sit ...</div>
        </div>
      </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameWrapper3}>
          {/* <button className={styles.whatIsDpl4}>Book</button> */}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;

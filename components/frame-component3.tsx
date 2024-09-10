import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;

  /** Style props */
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
  propRight?: CSSProperties["right"];
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  className = "",
  propBottom,
  propLeft,
  propRight,
}) => {
  const xMLID2IconStyle: CSSProperties = useMemo(() => {
    return {
      bottom: propBottom,
      left: propLeft,
      right: propRight,
    };
  }, [propBottom, propLeft, propRight]);

  return (
    <div className={[styles.xmlid2Parent, className].join(" ")}>
      {/* <img
        className={styles.xmlid2Icon}
        loading="lazy"
        alt=""
        src="/xmlid-2.svg"
        style={xMLID2IconStyle}
      /> */}
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <img className={styles.frameItem} alt="" src="/group-404.svg" />
            <div className={styles.frameWrapper}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <div className={styles.whatIsDpl}>{`Count :  01 `}</div>
                <div className={styles.frameContainer}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-289-2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.whatIsDplWrapper}>
                <div className={styles.whatIsDpl1}>
                  Service ID -OD45620000586963
                </div>
              </div>
              <div className={styles.whatIsDpl2}>Arrival Clean | Lorem</div>
              <div className={styles.whatIsDplContainer}>
                <div className={styles.whatIsDpl3}>
                  Lorem ipsum dolor sit ...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <b className={styles.whatIsDpl4}>Book</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;

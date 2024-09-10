import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  rectangle17?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  frameDivPadding,
  rectangle17,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDiv1Style}
    >
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.requestNowButtonWrapper}>
                <img
                  className={styles.requestNowButton}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className={styles.whatIsDplWrapper}>
                <a className={styles.whatIsDpl}>Welcome</a>
              </div>
              {/* <img className={styles.groupIcon} alt="" src="/group.svg" /> */}
            </div>
          </div>
          <div className={styles.fullLogo1Wrapper}>
            <img
              className={styles.fullLogo1}
              loading="lazy"
              alt=""
              src="/full-logo-1@2x.png"
            />
          </div>
          <div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <a className={styles.whatIsDpl1}>{`Property : XYZ 52 `}</a>
              <a className={styles.whatIsDpl2}>Room No : BK505</a>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src={rectangle17}
      />
    </div>
  );
};

export default FrameComponent;

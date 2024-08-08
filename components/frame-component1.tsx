import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
  rectangle34?: string;
  group445?: string;
  group442?: string;
  wHATISDPL?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  propGap,
  rectangle34,
  propHeight,
  group445,
  propHeight1,
  group442,
  wHATISDPL,
  propMinWidth,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const wHATISDPLStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={[styles.vectorParent, className].join(" ")}
      style={frameDiv2Style}
    >
      <img className={styles.frameChild} alt="" src={rectangle34} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-12.svg"
            />
          </div>
          <div className={styles.vectorGroup} style={frameDiv3Style}>
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/vector-12.svg"
            />
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/vector-12.svg"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src={group445}
              style={groupIconStyle}
            />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src={group442}
        />
        <div className={styles.whatIsDplWrapper}>
          <b className={styles.whatIsDpl} style={wHATISDPLStyle}>
            {wHATISDPL}
          </b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;

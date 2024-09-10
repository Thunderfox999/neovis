import type { NextPage } from "next";
import styles from "./frame-component4.module.css";
import Link from "next/link";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
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
        <Link href="/" className={styles.whatIsDpl3}>
          Back
        </Link>
      </div>
    </section>
  );
};

export default FrameComponent4;

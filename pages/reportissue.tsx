import type { NextPage } from "next";
import FrameComponent6 from "../components/frame-component6";
import styles from "./i-report-issue-page.module.css";
import Link from "next/link";

const IReportIssuePage: NextPage = () => {
  const backFunctionality = () => {
    console.log("hello");
  };

  return (
    <div className={styles.iReportIssuePage}>
      <div className={styles.whatIsDplParent}>
        <Link href="/">
          <b className={styles.whatIsDpl}>Back</b>
          <img
            className={styles.colorOverlayIcon}
            alt=""
            src="/color-overlay2.svg"
          />
        </Link>
      </div>

      <div className={styles.iReportIssuePageChild} />
      <div className={styles.iReportIssuePageInner}>
        <div className={styles.logoContainerParent}>
          <div className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <div className={styles.logoIconWrapper}>
                <img
                  className={styles.logoIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className={styles.whatIsDplWrapper}>
                <a className={styles.whatIsDpl1}>Welcome</a>
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
            <a className={styles.whatIsDpl2}>{`Property : XYZ 52 `}</a>
            <a className={styles.whatIsDpl3}>Room No : BK505</a>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/rectangle-17.svg"
        />
      </div>
      <section className={styles.frameParent}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <div className={styles.colorOverlayWrapper}>
            <img
              className={styles.colorOverlayIcon1}
              loading="lazy"
              alt=""
              src="/color-overlay-1.svg"
            />
          </div>
          <Link href="/" className={styles.whatIsDpl4}>
            Back
          </Link>
        </div>
        <div className={styles.frameGroup}>
          <FrameComponent6 />
          <div className={styles.groupWrapper}>
            <img
              className={styles.groupIcon1}
              loading="lazy"
              alt=""
              src="/group-17.svg"
            />
          </div>
        </div>
      </section>
      <div className={styles.iReportIssuePageInner1}>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/rectangle-18.svg"
        />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupChild} />
        </div>
      </div>
      <div className={styles.whatIsDplGroup}>
        <Link href="/" onClick={backFunctionality}>
          <b className={styles.whatIsDpl}>Back</b>
        </Link>
        <img
          className={styles.colorOverlayIcon2}
          alt=""
          src="/color-overlay-1.svg"
        />
      </div>
      <div className={styles.contentFooter}>
        <div className={styles.footerContent}>
          <div className={styles.footerElements}>
            <img
              className={styles.footerIcon}
              loading="lazy"
              alt=""
              src="/vector-11.svg"
            />
          </div>
          <div className={styles.whatIsDplContainer}>
            <b
              className={styles.whatIsDpl6}
            >{`Customized Message Defined In `}</b>
          </div>
          <div className={styles.footerLogo}>
            <img
              className={styles.fullLogo2}
              loading="lazy"
              alt=""
              src="/full-logo-2@2x.png"
            />
            <div className={styles.groupContainer}>
              <img
                className={styles.groupIcon2}
                loading="lazy"
                alt=""
                src="/group-21.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IReportIssuePage;

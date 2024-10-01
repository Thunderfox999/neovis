import type { NextPage } from "next";
import FrameComponent6 from "../components/frame-component6";
import styles from "./i-report-issue-page.module.css";
import Link from "next/link";
import CustomFooter from "../components/footer";
import FrameComponent from "../components/frame-component";

const IReportIssuePage: NextPage = () => {
  const backFunctionality = () => {
    console.log("hello");
  };

  return (
    <div className={styles.iReportIssuePage}>

      <div className={styles.iReportIssuePageChild} />
       <FrameComponent rectangle17="/rectangle-17.svg" />
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
      <CustomFooter />
    </div>
  );
};

export default IReportIssuePage;

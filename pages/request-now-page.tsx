import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import styles from "./request-now-page.module.css";

const RequestNowPage: NextPage = () => {
  return (
    <div className={styles.requestNowPage1}>
      <div className={styles.whatIsDplParent}>
        <b className={styles.whatIsDpl}>Back</b>
        <img
          className={styles.colorOverlayIcon}
          alt=""
          src="/color-overlay3.svg"
        />
      </div>
      <div className={styles.requestNowPage1Child} />
      <FrameComponent rectangle17="/rectangle-17.svg" />
      <section className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.frameChild} />
              </div>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-19@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameItem} />
          <div className={styles.xmlid2Parent}>
            <img
              className={styles.xmlid2Icon}
              loading="lazy"
              alt=""
              src="/xmlid-2.svg"
            />
            <div className={styles.whatIsDpl1}>
              Enhance Your Stay By Booking Our Products And Services, Feel Free
              To Share With Us By Selecting This Menu Options Here -
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/rectangle-34.svg"
                    />
                    <div className={styles.frameWrapper1}>
                      <img
                        className={styles.frameChild1}
                        loading="lazy"
                        alt=""
                        src="/group-439.svg"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <img
                        className={styles.frameChild2}
                        loading="lazy"
                        alt=""
                        src="/group-441.svg"
                      />
                      <div className={styles.dPLQuestionPair}>
                        <b className={styles.whatIsDpl2}>Book Now</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.xmlid2Group}>
                    <img
                      className={styles.xmlid2Icon1}
                      loading="lazy"
                      alt=""
                      src="/xmlid-2.svg"
                    />
                    <FrameComponent1
                      rectangle34="/rectangle-341.svg"
                      group445="/group-445.svg"
                      group442="/group-441.svg"
                      wHATISDPL=" Report Issue"
                    />
                  </div>
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.vectorGroup}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/rectangle-341.svg"
                    />
                    <div className={styles.frameWrapper2}>
                      <div className={styles.frameParent5}>
                        <img
                          className={styles.frameChild3}
                          loading="lazy"
                          alt=""
                          src="/group-405.svg"
                        />
                        <div className={styles.frameParent6}>
                          <img
                            className={styles.frameChild4}
                            alt=""
                            src="/group-439-1.svg"
                          />
                          <img
                            className={styles.frameIcon}
                            alt=""
                            src="/frame2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent7}>
                      <img
                        className={styles.frameChild2}
                        loading="lazy"
                        alt=""
                        src="/group-441.svg"
                      />
                      <div className={styles.dPLQuestionPair}>
                        <b className={styles.whatIsDpl2}>Add Review</b>
                      </div>
                    </div>
                  </div>
                  <FrameComponent1
                    propGap="20.9px"
                    rectangle34="/rectangle-341.svg"
                    propHeight="42.1px"
                    group445="/group-446.svg"
                    propHeight1="42.1px"
                    group442="/group-441.svg"
                    wHATISDPL="Contact Us"
                    propMinWidth="67px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.frameChild6}
          loading="lazy"
          alt=""
          src="/rectangle-17.svg"
        />
      </section>
      <div className={styles.requestNowPage1Inner}>
        <div className={styles.frameParent8}>
          <div className={styles.logoButtonWrapper}>
            <img
              className={styles.logoButtonIcon}
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className={styles.whatIsDplContainer}>
            <b
              className={styles.whatIsDpl4}
            >{`Customized Message Defined In `}</b>
          </div>
          <div className={styles.fullLogo2Parent}>
            <img
              className={styles.fullLogo2}
              loading="lazy"
              alt=""
              src="/full-logo-2@2x.png"
            />
            <div className={styles.groupWrapper}>
              <img
                className={styles.groupIcon1}
                loading="lazy"
                alt=""
                src="/group-15.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestNowPage;

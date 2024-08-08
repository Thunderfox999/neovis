import type { NextPage } from "next";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import styles from "./request-now-page1.module.css";

const RequestNowPage1: NextPage = () => {
  return (
    <div className={styles.requestNowPage2}>
      <div className={styles.whatIsDplParent}>
        <b className={styles.whatIsDpl}>Back</b>
        <img
          className={styles.colorOverlayIcon}
          alt=""
          src="/color-overlay1.svg"
        />
      </div>
      <div className={styles.requestNowPage2Child} />
      <FrameComponent4 />
      <section className={styles.contentStructure}>
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group-16@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-28.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-404.svg"
                  />
                  <div className={styles.frameWrapper}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameInner} />
                      <div className={styles.whatIsDplContainer}>
                        <span className={styles.count}>{`Count :  `}</span>
                        <span className={styles.span}>01</span>
                        <span>{` `}</span>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <img
                          className={styles.frameChild1}
                          loading="lazy"
                          alt=""
                          src="/group-289@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.frameParent1}>
                    <div className={styles.whatIsDplWrapper}>
                      <div className={styles.whatIsDpl1}>
                        Service ID -OD45620000586963
                      </div>
                    </div>
                    <div className={styles.whatIsDpl2}>
                      Arrival Clean | Lorem
                    </div>
                    <div className={styles.whatIsDplFrame}>
                      <div className={styles.whatIsDpl3}>
                        Lorem ipsum dolor sit ...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper3}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.rectangleDiv} />
                  <b className={styles.whatIsDpl4}>Book</b>
                </div>
              </div>
            </div>
            <FrameComponent2 group289="/group-289-1@2x.png" />
          </div>
          <div className={styles.frameGroup}>
            <FrameComponent3 />
            <FrameComponent2 propFlex="0.8182" group289="/group-289-2@2x.png" />
          </div>
          <div className={styles.mixedSequence}>
            <FrameComponent2 propFlex="0.8182" group289="/group-289-2@2x.png" />
            <FrameComponent3
              propBottom="41px"
              propLeft="unset"
              propRight="-29px"
            />
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild2} />
          <div className={styles.frameChild3} />
        </div>
      </section>
      <div className={styles.footer}>
        <img
          className={styles.footerChild}
          loading="lazy"
          alt=""
          src="/rectangle-17.svg"
        />
        <footer className={styles.footerContent}>
          <div className={styles.frameParent3}>
            <div className={styles.footerIconWrapper}>
              <img
                className={styles.footerIcon}
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
            </div>
            <div className={styles.whatIsDplWrapper1}>
              <b
                className={styles.whatIsDpl5}
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
        </footer>
      </div>
    </div>
  );
};

export default RequestNowPage1;

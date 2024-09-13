import type { NextPage } from "next";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import styles from "./addreview.module.css";
import Link from "next/link";
import CustomFooter from "../components/footer";
import { useState } from "react";
import Reviewcomp from "../components/reviewtabrebook";

const RequestNowPage1: NextPage = () => {
  const [activeTab, setActiveTab] = useState("productServices");

  return (
    <div className={styles.requestNowPage2}>
      <FrameComponent4 />
      <section className={styles.tabsSection}>
        <nav className={styles.navbar}>
          <button
            className={`${styles.navItem} ${
              activeTab === "productServices" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("productServices")}>
            Product/Services
          </button>
          <button
            className={`${styles.navItem} ${
              activeTab === "reportFeedback" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("reportFeedback")}>
            Report Feedback
          </button>
          <Link href="/FeedbackForm">
            <button
              className={`${styles.navItem} ${
                activeTab === "stayingExperience" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("stayingExperience")}>
              Staying Experience
            </button>
          </Link>
        </nav>

        {activeTab === "productServices" && (
          <section className={styles.contentStructure}>
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
                    <button className={styles.whatIsDpl5}>Re-Book</button>
                  </div>
                </div>
                <Reviewcomp group289="/group-289-1@2x.png" />
              </div>
              <div className={styles.frameGroup}>
                <Reviewcomp />
                <Reviewcomp group289="/group-289-2@2x.png" />
              </div>
              <div className={styles.mixedSequence}>
                <Reviewcomp group289="/group-289-2@2x.png" />
                <Reviewcomp />
              </div>
            </div>
          </section>
        )}

        {activeTab === "reportFeedback" && (
          <section className={styles.contentStructure}>
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
                    <button className={styles.whatIsDpl5}>Re-Book</button>
                  </div>
                </div>
                <Reviewcomp group289="/group-289-1@2x.png" />
              </div>
              <div className={styles.frameGroup}>
                <Reviewcomp />
                <Reviewcomp group289="/group-289-2@2x.png" />
              </div>
              <div className={styles.mixedSequence}>
                <Reviewcomp group289="/group-289-2@2x.png" />
                <Reviewcomp />
              </div>
            </div>
          </section>
        )}

        {activeTab === "stayingExperience" && (
          <section className={styles.contentStructure}>
            {/* Add content for Staying Experience tab here */}
            <p>Staying Experience section is under construction.</p>
          </section>
        )}
      </section>

      <div className={styles.footer}>
        <img
          className={styles.footerChild}
          loading="lazy"
          alt=""
          src="/rectangle-17.svg"
        />
      </div>
      <CustomFooter />
    </div>
  );
};

export default RequestNowPage1;

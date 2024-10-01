"use client";

import type { NextPage } from "next";
import { Button } from "@mui/material";
import FrameComponent from "../components/frame-component";
import ComponentPair from "../components/component-pair";
import ComponentPair1 from "../components/component-pair1";
import styles from "../pages/index.module.css";
import FrameComponent1 from "../components/frame-component1";

const AddReviewPage: NextPage = () => {
  return (
    <div className={styles.addReviewPage}>
      {/* <div className={styles.whatIsDplParent}>
        <b className={styles.whatIsDpl}>Back</b>
        <img
          className={styles.colorOverlayIcon}
          alt=""
          src="/color-overlay.svg"
        />
      </div> */}
      
      <section className={styles.groupParent}>

        <div className={styles.componentStructure}>
      

          <div className={styles.xmlid2Parent}>
    
            <div className={styles.frameChild14} />
            <div className={styles.componentContent}>
              <div className={styles.dPLComponentContainer}>
                <div className={styles.whatIsDplWrapper}>
                  <div className={styles.whatIsDpl33}>Your Review *</div>
                </div>
                <div className={styles.dPLComponentWrapper}>
                  <div className={styles.componentLayout}>
                    <img
                      className={styles.componentElementIcon}
                      loading="lazy"
                      alt=""
                      src="/frame.svg"
                    />
                  </div>
                  <div className={styles.whatIsDpl34}>Cancel</div>
                </div>
              </div>
            </div>
            <div className={styles.componentContent1}>
              <div className={styles.componentElementContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameChild16} />
                  <div className={styles.whatIsDpl35}>Type Your Review</div>
                </div>
              </div>
            </div>
            <div className={styles.whatIsDplContainer}>
              <div className={styles.whatIsDpl36}>Feedback *</div>
            </div>
            <div className={styles.componentStructure1}>
              <div className={styles.componentHierarchy}>
                <div className={styles.componentTrio}>
                  {/* <img
                    className={styles.componentTrioChild}
                    loading="lazy"
                    alt=""
                    src="/group-404.svg"
                  /> */}
                  <div className={styles.dPLComponentTrio}>
                    <div className={styles.dPLComponentTrioChild} />
                    <div className={styles.groupWrapper}>
                      <img
                        className={styles.groupIcon3}
                        loading="lazy"
                        alt=""
                        src="/group-3@2x.png"
                      />
                    </div>
                    <div className={styles.whatIsDpl37}>Terrible</div>
                  </div>
                </div>
                <div className={styles.componentTrio}>
                  {/* <img
                    className={styles.componentTrioItem}
                    loading="lazy"
                    alt=""
                    src="/group-407.svg"
                  /> */}
                  <div className={styles.rectangleParent3}>
                    <div className={styles.dPLComponentTrioChild} />
                    <img
                      className={styles.frameChild18}
                      loading="lazy"
                      alt=""
                      src="/group-367@2x.png"
                    />
                    <div className={styles.whatIsDpl38}>Poor</div>
                  </div>
                </div>
                <div className={styles.componentTrio2}>
                  <div className={styles.dPLComponentTrioChild} />
                  <div className={styles.componentTrioInner1}>
                    <img
                      className={styles.frameChild19}
                      loading="lazy"
                      alt=""
                      src="/group-366@2x.png"
                    />
                  </div>
                  <div className={styles.whatIsDpl37}>Medium</div>
                </div>
              </div>
            </div>
            <div className={styles.xmlid2Group}>
              <div className={styles.dPLComponentContainer1}>
                <div className={styles.dPLComponentHierarchy}>
                  <div className={styles.dPLComponentPair}>
                    <div className={styles.dPLComponentPairChild} />
                    <div className={styles.componentSubpair}>
                      <img
                        className={styles.componentSubpairChild}
                        loading="lazy"
                        alt=""
                        src="/group-368@2x.png"
                      />
                    </div>
                    <div className={styles.whatIsDpl40}>Good</div>
                  </div>
                  <div className={styles.dPLComponentPair1}>
                    <div className={styles.dPLComponentTrioChild} />
                    <div className={styles.dPLComponentPairInner}>
                      <img
                        className={styles.frameChild24}
                        loading="lazy"
                        alt=""
                        src="/group-369@2x.png"
                      />
                    </div>
                    <div className={styles.whatIsDpl41}>Excellent</div>
                  </div>
                  {/* <img
                    className={styles.xmlid2Icon2}
                    loading="lazy"
                    alt=""
                    src="/xmlid-2.svg"
                  /> */}
                </div>
              </div>
            </div>
            <div className={styles.xMLIDContainer}>
              {/* <img
                className={styles.xmlid2Icon3}
                loading="lazy"
                alt=""
                src="/xmlid-2.svg"
              /> */}
              <div className={styles.xMLIDContainerInner}>
                <Button
                  className={styles.groupButton}
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "11",
                    background: "#34b25f",
                    borderRadius: "3px",
                    "&:hover": { background: "#34b25f" },
                    width: 92,
                    height: 25,
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddReviewPage;

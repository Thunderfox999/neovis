import type { NextPage } from "next";
import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import FrameComponent5 from "../components/frame-component5";
import styles from "./request-now-page2.module.css";

const RequestNowPage2: NextPage = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] = useState(
    new Date("2024-05-28")
  );
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.requestNowPage3}>
        <div className={styles.whatIsDplParent}>
          <b className={styles.whatIsDpl}>All</b>
          <b className={styles.whatIsDpl1}>Services Wise</b>
          <b className={styles.whatIsDpl2}>Product Wise</b>
        </div>
        <img
          className={styles.requestNowPage3Child}
          alt=""
          src="/group-371.svg"
        />
        <main className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.colorOverlayWrapper}>
              <img
                className={styles.colorOverlayIcon}
                loading="lazy"
                alt=""
                src="/color-overlay-1.svg"
              />
            </div>
            <a className={styles.whatIsDpl3}>Back</a>
          </div>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <section className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <FrameComponent5 />
            <div className={styles.contentContainerParent}>
              <div className={styles.contentContainer}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                  <div className={styles.rectangleWrapper}>
                    <img
                      className={styles.rectangleIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-30@2x.png"
                    />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameGroup}>
                      <div className={styles.frameContainer}>
                        <div className={styles.rectangleFrame}>
                          <img
                            className={styles.frameChild1}
                            loading="lazy"
                            alt=""
                            src="/rectangle-31@2x.png"
                          />
                        </div>
                        <div className={styles.whatIsDplGroup}>
                          <div className={styles.whatIsDpl4}>
                            Service ID - OD45620000586963
                          </div>
                          <div className={styles.whatIsDpl5}>
                            Arrival Clean | Lorem Ipsum
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameDiv}>
                        <div className={styles.rectangleWrapper1}>
                          <img
                            className={styles.frameChild2}
                            loading="lazy"
                            alt=""
                            src="/rectangle-32@2x.png"
                          />
                        </div>
                        <div className={styles.groupDiv}>
                          <div className={styles.rectangleDiv} />
                          <div className={styles.whatIsDplContainer}>
                            <span className={styles.count}>{`Count :  `}</span>
                            <span className={styles.span}>01</span>
                            <span>{` `}</span>
                          </div>
                          <div className={styles.frameWrapper1}>
                            <img
                              className={styles.frameChild3}
                              loading="lazy"
                              alt=""
                              src="/group-2891@2x.png"
                            />
                          </div>
                        </div>
                        <div className={styles.rectangleParent1}>
                          <div className={styles.frameChild4} />
                          <b className={styles.whatIsDpl6}>Book</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.whatIsDplWrapper}>
                    <div
                      className={styles.whatIsDpl7}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneand pharetra aliquam egestas. Nullam auctor nibh id risus finibus dssf porttitor. Etiam placerat in neque et convallis. Phasellus vulputate sagittis ligula. Vestibulum laoreet lacinia magna, quis ultricies qua venenatis nec. Sed neque dolor,varius a hendrerit  non, elementummetus. `}</div>
                  </div>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.frameChild5}
                      loading="lazy"
                      alt=""
                      src="/rectangle-35.svg"
                    />
                  </div>
                  <div className={styles.dPLContainerWrapper}>
                    <div className={styles.dPLContainer}>
                      <div className={styles.whatIsDpl8}>Any Specification</div>
                      <div className={styles.rectangleParent2}>
                        <div className={styles.frameChild6} />
                        <div className={styles.whatIsDpl9}>
                          Type Your Comments
                        </div>
                      </div>
                      <div className={styles.whatIsDpl8}>All Reviews</div>
                      <div className={styles.whatIsDplParent1}>
                        <div
                          className={styles.whatIsDpl11}
                        >{`Ajay Chaudhary  | `}</div>
                        <div className={styles.wrapper}>
                          <DatePicker
                            value={frameDateTimePickerValue}
                            onChange={(newValue: any) => {
                              setFrameDateTimePickerValue(newValue);
                            }}
                            sx={{
                              fieldset: {
                                borderColor: "transparent",
                                borderTopWidth: 0,
                                borderRightWidth: 0,
                                borderBottomWidth: 0,
                                borderLeftWidth: 0,
                              },
                              "&:hover": {
                                fieldset: { borderColor: "transparent" },
                                ".MuiOutlinedInput-notchedOutline": {
                                  borderColor: "transparent",
                                },
                              },
                              "& input::placeholder": {
                                textColor: "rgba(159, 156, 206, 0.8)",
                                fontSize: 7,
                              },
                              input: {
                                color: "rgba(159, 156, 206, 0.8)",
                                fontSize: 7,
                                textAlign: "left",
                                fontWeight: "500",
                              },
                              "& .MuiInputBase-root": {
                                height: 10,
                                gap: "8px",
                                flexDirection: { flexDirection: "row" },
                              },
                            }}
                            slotProps={{
                              textField: {
                                size: "medium",
                                fullWidth: true,
                                required: false,
                                autoFocus: false,
                                error: false,
                              },
                              openPickerIcon: {
                                component: () => <></>,
                              },
                            }}
                          />
                        </div>
                        <div className={styles.frameParent1}>
                          <div className={styles.frameFrame}>
                            <img
                              className={styles.frameIcon}
                              loading="lazy"
                              alt=""
                              src="/frame1@2x.png"
                            />
                          </div>
                          <div className={styles.whatIsDpl12}>Excellent</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.frameChild7}
                      loading="lazy"
                      alt=""
                      src="/rectangle-35.svg"
                    />
                  </div>
                  <div className={styles.whatIsDplWrapper}>
                    <div className={styles.whatIsDpl7}>
                      My bathroom stand iron remove Wow bathroom cleaning
                      service is professional good behaviour and quality
                      maintain I rememberh this month booking thank you.
                      additionally recleaned the surfaces which we thought
                      needed cleaning.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.groupParent}>
                  <img
                    className={styles.groupIcon1}
                    loading="lazy"
                    alt=""
                    src="/group-18.svg"
                  />
                  <div className={styles.xMLContent}>
                    <div className={styles.xmlid2Wrapper}>
                      <img
                        className={styles.xmlid2Icon}
                        loading="lazy"
                        alt=""
                        src="/xmlid-2.svg"
                      />
                    </div>
                    <img
                      className={styles.xMLContentChild}
                      loading="lazy"
                      alt=""
                      src="/rectangle-17.svg"
                    />
                  </div>
                  <img
                    className={styles.xmlid2Icon1}
                    loading="lazy"
                    alt=""
                    src="/xmlid-2.svg"
                  />
                </div>
                <footer className={styles.frameFooter}>
                  <div className={styles.logoContainerTwoParent}>
                    <div className={styles.logoContainerTwo}>
                      <img
                        className={styles.logoShapeTwo}
                        loading="lazy"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className={styles.logoTitleTwo}>
                      <b
                        className={styles.whatIsDpl14}
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
                          className={styles.groupIcon2}
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
          </section>
          <img
            className={styles.groupIcon3}
            loading="lazy"
            alt=""
            src="/group-16@2x.png"
          />
        </main>
      </div>
    </LocalizationProvider>
  );
};

export default RequestNowPage2;

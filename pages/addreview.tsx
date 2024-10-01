import type { NextPage } from "next";
import { useState } from "react";
import styles from "./addreview.module.css";
import CustomFooter from "../components/footer";
import FrameComponent from "../components/frame-component";
import Link from "next/link";
import AddReviewPage from "./review-symbol";

interface ServiceCardProps {
  count: string;
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  count,
  id,
  title,
  description,
  buttonText,
  buttonColor,
}) => (
  <div className={styles.serviceCard}>
    <div className={styles.cardHeader}>
      <div className={styles.countWrapper}>
        <span className={styles.count}>Count : {count}</span>
      </div>
    </div>
    <div className={styles.cardContent}>
      <p className={styles.serviceId}>{id}</p>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
    </div>
    <button className={`${styles.bookButton} ${styles[buttonColor]}`}>
      {buttonText}
    </button>
  </div>
);

const RequestNowPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState("productServices");

  const services = [
    {
      count: "01",
      id: "Service ID - OD45620000586963",
      title: "Arrival Clean | Lorem",
      description: "Lorem ipsum dolor sit ...",
      buttonText: "Re-Book",
      buttonColor: "purpleButton",
    },
    {
      count: "01",
      id: "Product ID - OD45620000586945",
      title: "Bottled Water | Lorem",
      description: "Lorem ipsum dolor sit ...",
      buttonText: "Re-Book",
      buttonColor: "purpleButton",
    },
    {
      count: "01",
      id: "Service ID - OD45620000586963",
      title: "Arrival Clean | Lorem",
      description: "Lorem ipsum dolor sit ...",
      buttonText: "Re-Book",
      buttonColor: "purpleButton",
    },
    {
      count: "01",
      id: "Product ID - OD45620000586945",
      title: "Bottled Water | Lorem",
      description: "Lorem ipsum dolor sit ...",
      buttonText: "Re-Book",
      buttonColor: "purpleButton",
    },
  ];

  return (
    <>
      <div className={styles.requestNowPage}>
        <FrameComponent rectangle17="/rectangle-17.svg" />
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
        <section className={styles.tabsSection}>
          <nav className={styles.navbar}>
            <button
              className={`${styles.navItem} ${
                activeTab === "productServices" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("productServices")}
            >
              Product/Services
            </button>
            <button
              className={`${styles.navItem} ${
                activeTab === "reportFeedback" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("reportFeedback")}
            >
              Report Feedback
            </button>
            <button
              className={`${styles.navItem} ${
                activeTab === "stayingExperience" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("stayingExperience")}
            >
              Staying Experience
            </button>
          </nav>

          <div className={styles.serviceGrid}>
            {activeTab === "productServices" && (
              <>
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </>
            )}
            {activeTab === "reportFeedback" && (
              <>
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </>
            )}
        
          </div>
          {activeTab === "stayingExperience" && (
              <>
                <AddReviewPage />
              </>
            )}
        </section>
        <CustomFooter />
      </div>
    </>
  );
};

export default RequestNowPage;

import type { NextPage } from "next";
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import styles from "./FeedbackForm.module.css";

const FeedbackForm: NextPage = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleRatingClick = (index: number) => {
    setSelectedRating(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <span className={styles.logoLetter}>A</span>
              <h1 className={styles.logoText}>Welcome</h1>
            </div>
            <div className={styles.logo}>
              <span className={styles.logoLetter}>N</span>
              <span className={styles.logoText}>Neovis</span>
            </div>
          </div>
          <div className={styles.propertyInfo}>
            Property: XYZ01<br />
            Room No: BR505
          </div>
          <div className={styles.navBack}>
            <ArrowLeft size={16} className={styles.icon} />
            <span>Back</span>
          </div>
          <div className={styles.navLinks}>
            <button className={styles.navLink}>For Product/Services</button>
            <button className={styles.navLink}>Report Feedback</button>
            <button className={styles.navLink}>Staying Experience</button>
          </div>
          <div className={styles.userInfoCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>
                <AlertCircle size={16} className={styles.cardIcon} />
                <span>Report Issue</span>
              </div>
            </div>
            <div className={styles.userDetails}>
              <p>Ajay Chaudhary</p>
              <p>Check in: 12 May, 2024</p>
              <p>Check Out: 28 May, 2024</p>
            </div>
            <button className={styles.reBookButton}>
              Re-Book
            </button>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Your Review <span className={styles.required}>*</span>
            </label>
            <textarea
              className={styles.textarea}
              placeholder="Type Your Review"
              rows={4}
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Feedback <span className={styles.required}>*</span>
            </label>
            <div className={styles.ratingContainer}>
              {['Terrible', 'Poor', 'Medium', 'Good', 'Excellent'].map((rating, index) => (
                <div key={rating} className={styles.ratingOption}>
                  <button
                    className={`${styles.ratingButton} ${selectedRating === index ? styles.selected : ''}`}
                    onClick={() => handleRatingClick(index)}
                  >
                    {index < 3 ? '😞' : index === 3 ? '😊' : '😍'}
                  </button>
                  <span className={styles.ratingLabel}>{rating}</span>
                </div>
              ))}
            </div>
          </div>
          <button className={styles.submitButton}>
            Submit
          </button>
        </div>
        <div className={styles.footer}>
          Customized Message Defined In <span className={styles.footerHighlight}>Neovis</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;

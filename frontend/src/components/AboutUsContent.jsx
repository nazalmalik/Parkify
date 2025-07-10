import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import "./Aboutfeatures.css";
import "./Missionvision.css";
import "./AboutSectionHeader.css";

import {
  FaParking,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaBullseye,
  FaEye,
} from "react-icons/fa";

import video from "../assets/smartparking.mp4";
import "./About.css";
import "./Aboutfeatures.css";
import "./Missionvision.css";
import "./AboutSectionHeader.css";

const AboutUsContent = () => {
  const videoRef = useRef(null);
  const [activeTab, setActiveTab] = useState("mission");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <>
      {/* About Section Header */}
      <section className="about-section-header">
        <div className="overlay">
          <div className="content">
            <h1 className="about-heading">About Us</h1>
            <p>Make Your Parking Easier</p>
            <Link to="/" className="back-home-link">
              Home
            </Link>
          </div>
        </div>
        <div className="tiltedwave">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#f9f9fa"
              fillOpacity="1"
              d="M0,224L80,218.7C160,213,320,203,480,213.3C640,224,800,256,960,240C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        className="about-section"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="about-container">
          <div className="about-left">
            <motion.h2 className="section-heading">Who We Are</motion.h2>
            <p className="about-description">
              We are a passionate team committed to transforming the parking
              experience. Our goal is to make parking at shopping malls and
              public spaces as effortless and efficient as possible. Through the
              use of advanced technology, we offer real-time navigation, easy
              booking, and intelligent parking management. We strive to enhance
              convenience and simplify everyday tasks, creating a smarter, more
              streamlined experience for everyone.
            </p>
          </div>
          <div className="about-right">
            <video
              ref={videoRef}
              src={video}
              className="about-video"
              loop
              playsInline
            />
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="features-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2 className="section-heading features-title">
          Experience the Future of Parking
        </motion.h2>
        <div className="features-card-grid">
          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <div className="feature-icon">
              <FaParking />
            </div>
            <h3>Easy & Quick Reservations</h3>
          </motion.div>

          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <h3>Secure & Monitored Parking</h3>
          </motion.div>

          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <div className="feature-icon">
              <FaClock />
            </div>
            <h3>24/7 <br />Accessibility</h3>
          </motion.div>

          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <div className="feature-icon">
              <FaUsers />
            </div>
            <h3>User-Friendly Interface</h3>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        className="mission-vision-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2 className="section-heading mission-vision-title">
          Our Purpose and Future
        </motion.h2>

        <div className="tabs">
          <motion.button
            className={`tab-button ${activeTab === "mission" ? "active" : ""}`}
            onClick={() => setActiveTab("mission")}
          >
            Mission
          </motion.button>
          <motion.button
            className={`tab-button ${activeTab === "vision" ? "active" : ""}`}
            onClick={() => setActiveTab("vision")}
          >
            Vision
          </motion.button>
        </div>

        <div className="tab-content">
          {activeTab === "mission" && (
            <motion.div
              className="tab-panel"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="icon-container">
                <FaBullseye className="icon" />
              </div>
              <h3>Our Mission</h3>
              <p>
                To revolutionize shopping mall parking by integrating smart
                technology, ensuring a seamless, secure, and stress-free
                experience for every visitor.
              </p>
            </motion.div>
          )}

          {activeTab === "vision" && (
            <motion.div
              className="tab-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="icon-container">
                <FaEye className="icon" />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading provider of innovative parking solutions,
                making urban mobility smarter and more efficient with
                cutting-edge technology.
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default AboutUsContent;

import React, { useState } from "react";
import "./header.scss";
import profilePic from "../../assets/prof11.png";
import EmailModal from "./components/emailModal/EmailModal";
import ResumeModal from "./components/resumeModal/resumeModal";
import MailLogo from "../../assets/icons/noto_e-mail.png";
import Resume from "../../assets/icons/resume.png";

const Header: React.FC = () => {
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);

  const handleBellClick = () => {
    setShowEmailModal(true);
  };

  const handleResumeClick = () => {
    setShowResumeModal(true);
  };

  const handleCloseModal = () => {
    setShowEmailModal(false);
    setShowResumeModal(false);
  };

  const handleSendEmail = (content: string) => {
    console.log("Sending email with content:", content);
    handleCloseModal();
    // You can add your email sending logic here
  };

  return (
    <div className="Header">
      <div className="navigation">
        <div className="navigation__controls" onClick={handleResumeClick}>
          <img src={Resume} alt="CV logo" />
        </div>
        <div className="navigation__bell" onClick={handleBellClick}>
          <img src={MailLogo} alt="Mail Logo" />
        </div>
      </div>
      <div className="Header__main">
        <div className="Header__picture">
          <img src={profilePic} alt="Profile" />
        </div>
        <div>
          <h2>Pontus Lindström</h2>
        </div>
        <div>
          <p>Junior, Frontend Developer</p>
        </div>
        <div className="social-links">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link twitter"
          >
            Twitter
          </a>
        </div>
      </div>
      <EmailModal
        show={showEmailModal}
        handleClose={handleCloseModal}
        handleSend={handleSendEmail}
      />
      <ResumeModal
        show={showResumeModal}
        handleClose={handleCloseModal}
      />
    </div>
  );
};

export default Header;

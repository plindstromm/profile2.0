import React, { useState } from 'react';
import './header.scss';
import profilePic from '../../assets/prof11.png';
import EmailModal from './components/emailModal/EmailModal';
import MailLogo from '../../assets/icons/noto_e-mail.png';

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleBellClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSendEmail = (content: string) => {
    console.log('Sending email with content:', content);
    handleCloseModal();
    // You can add your email sending logic here
  };

  return (
    <div className="Header">
      <div className="navigation">
        <div className="navigation__controls">asdasd</div>
        <div className="navigation__bell" onClick={handleBellClick}>
          <img src={MailLogo} alt="Mail Logo" />
        </div>
      </div>
      <div className="Header__main">
        <div className="Header__picture">
          <img src={profilePic} alt="Profile" />
        </div>
        <div>
          <h2>Pontus lindström</h2>
        </div>
        <div>
          <p>Junior, Frontend developer</p>
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
      <EmailModal show={showModal} handleClose={handleCloseModal} handleSend={handleSendEmail} />
    </div>
  );
};

export default Header;

import React from "react";
import "./resumeModal.scss";

interface ResumeModalProps {
  show: boolean;
  handleClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ show, handleClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="resumeModal">
      <div className="resumeModal__content">
        <span className="resumeModal__close" onClick={handleClose}>
          &times;
        </span>
        <div className="resumeModal__header">
          <h2>Pontus Lindström</h2>
          <p>Slottsgatan 41a, Jönköping 55322, Sweden</p>
          <p>(+46) 735 298 598 | mukkepp@gmail.com</p>
        </div>
        <div className="resumeModal__body">
          <div className="resumeModal__column">
            <div className="resumeModal__section">
              <h3>Experience</h3>
              <div>
                <h4>Haga galvanisering AB - Supervisor</h4>
                <p>2012 - 2022</p>
                <p>A surface treatment company for steel and other metals located in Jonkoping, Sweden.</p>
              </div>
              <div>
                <h4>Coin360 - Frontend-developer internship</h4>
                <p>2023 - 2024</p>
                <p>A cryptanalysis web application for your average and advanced user located in St. Julian's Malta.</p>
              </div>
            </div>
            <div className="resumeModal__section">
              <h3>Education</h3>
              <div>
                <h4>Bäckadalsgymnasiet - Electrician</h4>
                <p>2009 - 2012</p>
                <p>Completed an electrician program at Bäckadalsgymnasiet gaining experience in electrical systems installation and maintenance.</p>
              </div>
              <div>
                <h4>JENSEN Yrkeshögskola Göteborg - Frontend-developer</h4>
                <p>2022 - 2024</p>
                <p>Just finished a Frontend dev program at JENSEN YH Gothenburg, Sweden, acquiring expertise in web development tools such as HTML, CSS, Javascript/Typescript (React), and UX/UI tools like Figma.</p>
              </div>
            </div>
          </div>
          <div className="resumeModal__column">
            <div className="resumeModal__section">
              <h3>Projects</h3>
              <p>You can find my projects here: <a href="https://github.com/plindstromm?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
            <div className="resumeModal__section">
              <h3>Languages</h3>
              <p>Fluent in Swedish and English, enabling both local and global work environments.</p>
            </div>
            <div className="resumeModal__section">
              <h3>Skills</h3>
              <ul>
                <li>Frontend Development: HTML, CSS, Javascript/Typescript (React), JIRA</li>
                <li>UX/UI Design: Figma</li>
                <li>Electrician Work: Installation, Maintenance, and Troubleshooting</li>
                <li>Project Management: Supervision, Quality Control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

import React, { useState, ChangeEvent, FormEvent } from 'react';
import './EmailModal.scss';

interface EmailModalProps {
  show: boolean;
  handleClose: () => void;
  handleSend: (content: string) => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ show, handleClose, handleSend }) => {
  const [emailContent, setEmailContent] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSend(emailContent);
    setEmailContent("");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEmailContent(event.target.value);
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <h2>Send Email</h2>
          <textarea
            value={emailContent}
            onChange={handleChange}
            placeholder="Write your email content here"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;


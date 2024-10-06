import React from 'react';

interface ContactFormEmailProps {
  senderEmail: string;
  message: string;
}

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({ senderEmail, message }) => {
  return (
    <div>
      <p>You have a new message from {senderEmail}:</p>
      <p>{message}</p>
    </div>
  );
};

export default ContactFormEmail;
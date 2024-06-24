import React from 'react';

interface ErrorProps {
  message?: string; // Error message to display
}

const Error: React.FC<ErrorProps> = ({ message = 'No users found...' }) => {
  return (
    <div className="error">
      <p className="message">{message}</p>
    </div>
  );
};

export default Error;
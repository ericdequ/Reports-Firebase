import React from 'react';
import './InvalidAccessToken.css';

const InvalidAccessToken = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="invalid-token-container">
      <h1 className="error-heading">Error: Invalid Access Token</h1>
      <p className="error-description">
        If you are a valid user, please try refreshing the page.
      </p>
      <button className="refresh-button" onClick={handleRefresh}>
        Refresh Page
      </button>
    </div>
  );
};

export default InvalidAccessToken;

import React, { useState } from 'react';
import AppContainer from '../../containers/AppContainer';

const IFrame = () => {
  const [isValidToken, setIsValidToken] = useState(false);

  const onMessage = (event) => {
   
    if (event.data.type === 'accessToken') {
      const accessToken = event.data.access_token;

      // Call an external API to validate the access token
      // In this example, we just assume it's valid if it's not empty
      const tokenIsValid = accessToken !== '';

      setIsValidToken(tokenIsValid);
    }
  };

  window.addEventListener('message', onMessage);

  return (
    <div>
      {isValidToken ? (
        // Render your application content here
        <>
          
          <AppContainer /><h1>Valid access token</h1></>
      ) : (
        // Render your application content here
        <>
          
          <AppContainer /><h1>invalid access token</h1></>
      )}
    </div>
  );
};

export default IFrame;
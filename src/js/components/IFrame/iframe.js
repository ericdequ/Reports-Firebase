import React, { useState } from 'react';
import AppContainer from '../../containers/AppContainer';
import InvalidAccessToken from './Invalid_Token';

const allowedOrigins = [
  "https://crm-reports-94d86.web.app/",
  "https://crm-reports-94d86.firebaseapp.com/",
  "http://localhost:3000/*",
  "https://breadgetter.emergingtech.co/*",
];

/* make a call to CRM firebase auth or copy or the auth */
const checkIsValid = () => {

}

const IFrame = () => {
  const [isValidToken, setIsValidToken] = useState(false);

  const onMessage = (event) => {
    window.parent.postMessage('Recieved message from parent ', '*');
    
    const accessToken = event.data.access_token;

    if (allowedOrigins.includes(event.origin)) {
      console.log("This message is from proper orgin")
      let valid = checkIsValid(accessToken)
      //setIsValidToken(valid);
    } else {
      //setIsValidToken(false);
      console.log("Improper orgin")
    }

    const tokenIsValid = (accessToken !== "");

    setIsValidToken(tokenIsValid);

  };

  window.addEventListener('message', onMessage);

  return (
    <div>
      {isValidToken ? (
        // Render your application content here
        <>
          <AppContainer /></>
      ) : (
        // Render your application content here
        <>
          <InvalidAccessToken/></>
      )}
    </div>
  );
};

export default IFrame;
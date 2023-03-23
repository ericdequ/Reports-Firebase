import React, { useState, useEffect } from 'react';
import AppContainer from '../../containers/AppContainer';
import InvalidAccessToken from './Invalid_Token';

const allowedOrigins = [
  "https://crm-reports-94d86.web.app/",
  "https://crm-reports-94d86.firebaseapp.com/",
  "http://localhost:3000/*",
  "https://breadgetter.emergingtech.co/*",
];

/* make a call to CRM firebase auth or copy or the auth */
const checkIsValid = async (accessToken) => {
  // Simulate an asynchronous operation
  return new Promise((resolve) => {
    setTimeout(() => {
      if (accessToken !== '') {
        resolve(true);
        console.log("valid");
      } else {
        resolve(true);
        console.log("invalid");
      }
    }, 300);
  });
};

const IFrame = () => {
  const [isValidToken, setIsValidToken] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  const onMessage = (event) => {
    window.parent.postMessage('Recieved message from parent ', '*');

    const token = event.data.access_token;
    setAccessToken(token);

    if (allowedOrigins.includes(event.origin)) {
      console.log("This message is from proper orgin");
      setAccessToken(token);
    } else {
      console.log("Improper orgin");
    }
  };

  useEffect(() => {
    if (accessToken !== '') {
      const checkTokenValidity = async () => {
        const valid = await checkIsValid(accessToken);
        setIsValidToken(valid);
      };
      checkTokenValidity();
    }
  }, [accessToken]);

  window.addEventListener('message', onMessage);

  return (
    <div>
      {isValidToken ? (
        <>
          <AppContainer /></>
      ) : (
        <>
          <InvalidAccessToken/></>
      )}
    </div>
  );
};

export default IFrame;

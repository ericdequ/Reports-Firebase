import React, { useState } from 'react';
import AppContainer from '../../containers/AppContainer';
import InvalidAccessToken from './Invalid_Token';

const allowedOrigins = [
  "https://crm-reports-94d86.web.app/",
  "https://crm-reports-94d86.firebaseapp.com/",
  "http://localhost:3000/",
  "http://192.168.0.235:3000/",
];

/* make a call to CRM firebase auth or copy or the auth */
const checkIsValid = ()=>{
   
}

const IFrame = () => {
  const [isValidToken, setIsValidToken] = useState(false);

  const onMessage = (event) => {

  console.log("GOT A MESSAGE")
  console.log(event.data)
  console.log(event.data.access_token)
  console.log(event.allowedOrigins)
  console.log("Got parent message");
  window.parent.postMessage('Recieved message from parent ', '*');



  const accessToken = event.data.access_token;

  window.parent.postMessage('Parent', accessToken);

  console.log('Parent',accessToken);

      // Call an external API to validate the access token
      // In this example, we just assume it's valid if it's not empty
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
          <InvalidAccessToken /></>
      )}
    </div>
  );
};

export default IFrame;
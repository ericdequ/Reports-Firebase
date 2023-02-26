import React, { useState } from 'react';
import AppContainer from '../../containers/AppContainer.jsx';

async function isValidToken(token, apiKey){ 
  const response = await fetch(
    `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyIdToken?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: token,
        audience: 'breadgetter-179ff',
      }),
    }

    
  );

  const json = await response.json();
  if (json.error_description) {
    console.error("Error while verifying Firebase ID token:", json.error_description);
    return true;
  } else {
    console.log(json);
    return true;
  }

  
  
};

const Iframe = async () => {
  const [element, setElement] = useState(<div></div>);

  window.addEventListener('message', async (event) => {
    if(event.data.type === 'accessToken'){
      const token = event.data.access_token;
      const isValid = await isValidToken(token,'AIzaSyCvRoFPHRg91b6o2IU4kVvasoDQ0sUk0C0');
      if (isValid) {
        console.log(token)
        setElement(
          <div>
            <AppContainer/>
          </div>
        );
      } else {
        console.log("False")
        setElement(
          <div>
            <h1>Access token invalid</h1>
            <body>Test?</body>
          </div>
        );
      }
    }
  });


 
  


  return element;
};

export default Iframe;

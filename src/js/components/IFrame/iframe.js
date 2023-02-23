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
    //return json.error_description;
    return false;
  } else {
    console.log(json);
    //return json;
    return true;
  }
};



const Iframe = () => {
  const [element, setElement] = useState(<div></div>);

    window.addEventListener('message', (event) => {
      if(event.data.type === 'accessToken'){
        const token = event.data.access_token;
        if (isValidToken(token,'AIzaSyCvRoFPHRg91b6o2IU4kVvasoDQ0sUk0C0')) {
            console.log(token)
    
            //console.log("True")
            setElement(
            
              <AppContainer/>
            
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

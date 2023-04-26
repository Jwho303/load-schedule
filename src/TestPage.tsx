import React, { useState } from 'react';

const TestPage = () => {

  const [loadsheddingStatus, setLoadsheddingStatus] = useState<number>();
  const checkLoadsheddingStatus = async () => {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    redirect: 'follow',
    mode: 'no-cors',
  };
  
    try {
      const response = await fetch('https://loadshedding.eskom.co.za/LoadShedding/GetStatus', requestOptions);
      console.log("response", response);
      //console.log("response type", typeof(response));
      const content = await response.text(); // Get the response content as text
      console.log("Response content:", content); // Log the response content
      //const stage = JSON.parse(content); 
      //console.log("stage", stage);
      //setLoadsheddingStatus(stage);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div>
      <button onClick={checkLoadsheddingStatus}>Check Loadshedding Status</button>
      <p>Current Loadshedding Status: {loadsheddingStatus}</p>
    </div>
  );
};

export default TestPage;

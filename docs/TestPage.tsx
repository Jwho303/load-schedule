import React, { useState } from 'react';
import { Status, LoadsheddingStage, Search, Province } from '../src/custom_modules/eskom-loadshedding-api'

const TestPage = () => {
  const [loadsheddingStatus, setLoadsheddingStatus] = useState<LoadsheddingStage>();
  const [municipalities, setMunicipalities] = useState<string[]>([]);
  const [suburbs, setSuburbs] = useState<string[]>([]);

  const checkLoadsheddingStatus = () => {
    Status.getStatus().then((status: LoadsheddingStage) => {
      console.log('Current status:', status);
      setLoadsheddingStatus(status);
    });
  };

  const searchMunicipalities = () => {
    Search.getMunicipalities(Province.WESTERN_CAPE).then((municipalities) => {
      console.log('Western Cape municipalities:', municipalities.map((el) => el.name));
      setMunicipalities(municipalities.map((el) => el.name));
    });
  };

  const searchSuburbs = () => {
    Search.getMunicipalitySuburbs(336 /* Beaufort West's id */, 'Aard' /* Search term */).then((suburbs) => {
      console.log('Filtered suburbs in Beaufort West:', suburbs.map((el) => el.name));
      setSuburbs(suburbs.map((el) => el.name));
    });
  };

  return (
    <div>
      <button onClick={checkLoadsheddingStatus}>Check Loadshedding Status</button>
      <p>Current Loadshedding Status: {loadsheddingStatus}</p>
      <button onClick={searchMunicipalities}>Search Municipalities</button>
      <p>Western Cape Municipalities: {municipalities.join(', ')}</p>
      <button onClick={searchSuburbs}>Search Suburbs</button>
      <p>Filtered Suburbs in Beaufort West: {suburbs.join(', ')}</p>
    </div>
  );
};

export default TestPage;

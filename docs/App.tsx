import React, { useState } from "react";
import data from "./data.json";
import Schedule from "./Schedule";
import { Person } from "./types";
import TestPage from "./TestPage";

const App = () => {
 // const [people, setPeople] = useState<Person[]>(data);

  // const handleAddPerson = (person: Person) => {
  //   setPeople([...people, person]);
  // };

  return (
    <div>
      <h1>Loadshedding Schedule App</h1>
      <h2>Schedule</h2>
      <TestPage />
    </div>
  );
};

export default App;

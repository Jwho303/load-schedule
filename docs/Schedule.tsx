// import React, { useState } from "react";
import data from "./data.json";
import { Person } from "./types";

const isAffected = (person: Person, time: string) => {
  // determine if the person is affected by loadshedding at the given time
  // you can use a library or API to get the loadshedding schedule for the person's area
  // and compare it to the current time
  return true;
};

const Schedule = () => {
 // const [selectedDate, setSelectedDate] = useState(new Date());

  const rows = [];
  for (let i = 0; i < 48; i++) {
    const time = `${Math.floor(i / 2)
      .toString()
      .padStart(2, "0")}:${(i % 2 === 0 ? "00" : "30")}`;
    const cells = data.map((person) => (
      <td key={person.name}>
        {/* determine if the person is affected by loadshedding at this time */}
        {isAffected(person, time) ? "X" : "-"}
      </td>
    ));
    rows.push(
      <tr key={time}>
        <td>{time}</td>
        {cells}
      </tr>
    );
  }



  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          {data.map((person) => (
            <th key={person.name}>{person.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Schedule;

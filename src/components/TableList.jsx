// import React, { useEffect } from "react";
import "./TableList.css";
import JsonData from "../data.json";
import { useState } from "react";

// npm install json-server
//json-server --watch ./src/data.json

function JsonDataDisplay(props) {
  const { adminMode } = props;
  const [school, setSchool] = useState(JsonData.school);
  const [course, setCourse] = useState(JsonData.course);
  const [work, setWork] = useState(JsonData.work);

  console.log(JSON.stringify(setCourse));
  console.log(JSON.stringify(setWork));

  const [schoolPlace, setSchoolPlace] = useState();
  const [degree, setDegree] = useState();
  const [date, setDate] = useState();

  console.log(school);
  console.log(schoolPlace);
  console.log(degree);
  console.log(date);

  // useEffect(() => {
  //   fs.writeFile(
  //     path,
  //     JSON.stringify(namesList, namesList1, namesList2),
  //     (err) => {
  //       if (err) console.log("Error writing file:", err);
  //     }
  //   );
  // });

  const DisplaySchool = school.map((info) => {
    return (
      <tr>
        <td>{info.school}</td>
        <td>{info.degree}</td>
        <td>{info.date}</td>
      </tr>
    );
  });

  const DisplayCourse = course.map((info) => {
    return (
      <tr>
        <td>{info.course}</td>
        <td>{info.year}</td>
      </tr>
    );
  });

  const DisplayWork = work.map((info) => {
    return (
      <tr>
        <td>{info.company}</td>
        <td>{info.title}</td>
        <td>{info.text}</td>
        <td>{info.year}</td>
      </tr>
    );
  });

  return (
    <div className="test">
      <table>
        <thead className="box">
          <tr>
            <th>Firma</th>
            <th>Title</th>
            <th>Tekst</th>
            <th>Dato</th>
            <tbody>{DisplayWork}</tbody>
          </tr>
          <thead>
            <tr>
              <th>Skole</th>
              <th>Utdanning</th>
              <th>Dato</th>
            </tr>
          </thead>
          <tbody>{DisplaySchool}</tbody>
          <tr>
            <th>Kurs</th>
            <th>Dato</th>
          </tr>
          <tbody>{DisplayCourse}</tbody>
        </thead>

        {adminMode ? (
          <>
            <input
              type={"text"}
              placeholder="Skole"
              value={schoolPlace}
              onChange={(info) => setSchoolPlace(info.target.value)}
            />
            <input
              type={"text"}
              value={degree}
              onChange={(info) => setDegree(info.target.value)}
            />
            <input
              type={"month"}
              value={date}
              onChange={(info) => setDate(info.target.value)}
            />
            <button
              onClick={() =>
                setSchool((prevList) => [
                  ...prevList,
                  {
                    school: schoolPlace,
                    degree: degree,
                    date: date,
                  },
                ])
              }
            >
              Add name
            </button>
          </>
        ) : (
          <></>
        )}
      </table>
    </div>
  );
}

export default JsonDataDisplay;

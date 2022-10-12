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

  return (
    <div>
      <table>
        <tr>
          <th>Firma</th>
          <th>Title</th>
          <th>Tekst</th>
          <th>Dato</th>
        </tr>
        <tbody>{DisplayWork}</tbody>
      </table>
      <hr />
      <table>
        <tr>
          <th>Skole</th>
          <th>Utdanning</th>
          <th>Dato</th>
        </tr>
        <tbody>{DisplaySchool}</tbody>
      </table>
      <hr />
      <table>
        <tr>
          <th>Kurs</th>
          <th>Dato</th>
        </tr>
        <tbody>{DisplayCourse}</tbody>
      </table>
      <hr />

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
            placeholder="Utdanning"
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
    </div>
  );
}

export default JsonDataDisplay;

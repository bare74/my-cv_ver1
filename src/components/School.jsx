import JsonData from "../data.json";
import { useState } from "react";
import PrimaryButton from "./common/PrimaryButton";

function SchoolDataDisplay(props) {
  const { adminMode } = props;
  const [school, setSchool] = useState(JsonData.school);
  const [schoolPlace, setSchoolPlace] = useState();
  const [degree, setDegree] = useState();
  const [date, setDate] = useState();

  // fetch("http://51.174.192.177:8080/school")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  const DisplaySchool = school.map((info, id) => {
    return (
      <tr key={id}>
        <td>{info.school}</td>
        <td>{info.degree}</td>
        <td>{info.date}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Skole</th>
            <th>Utdanning</th>
            <th>Dato</th>
          </tr>
          {DisplaySchool}
        </tbody>
      </table>
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
          <PrimaryButton
            disableBtn={false}
            text={"Legg til skole"}
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
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SchoolDataDisplay;

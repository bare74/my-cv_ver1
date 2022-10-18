import JsonData from "../data.json";
import { useState } from "react";
import PrimaryButton from "./common/PrimaryButton";

function CourseDataDisplay(props) {
  const { adminMode } = props;
  const [course, setCourse] = useState(JsonData.course);
  const [newCourse, setNewCourse] = useState();
  const [dateCourse, setDateCourse] = useState();

  const DisplayCourse = course.map((info, id) => {
    return (
      <tr key={id}>
        <td>{info.course}</td>
        <td>{info.year}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Kurs</th>
            <th>Dato</th>
          </tr>
          {DisplayCourse}
        </tbody>
      </table>
      {adminMode ? (
        <>
          <input
            type={"text"}
            placeholder="Kurs"
            value={newCourse}
            onChange={(info) => setNewCourse(info.target.value)}
          />
          <input
            type={"month"}
            value={dateCourse}
            onChange={(info) => setDateCourse(info.target.value)}
          />
          <PrimaryButton
            disableBtn={false}
            text={"Legg til kurs"}
            onClick={() =>
              setCourse((prevList) => [
                ...prevList,
                {
                  course: newCourse,
                  year: dateCourse,
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

export default CourseDataDisplay;

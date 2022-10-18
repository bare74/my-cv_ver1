import JsonData from "../data.json";
import { useState } from "react";
import PrimaryButton from "./common/PrimaryButton";

// npm install json-server
//json-server --watch ./src/data.json

function WorkDataDisplay(props) {
  const { adminMode } = props;
  const [work, setWork] = useState(JsonData.work);
  const [newCompany, setNewCompany] = useState();
  const [newTitle, setNewTitle] = useState();
  const [newText, setNewText] = useState();
  const [yearWork, setYearWork] = useState();

  const DisplayWork = work.map((info, id) => {
    return (
      <tr key={id}>
        <td>{info.company}</td>
        <td>{info.title}</td>
        <td>{info.text}</td>
        <td>{info.year}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Firma</th>
            <th>Title</th>
            <th>Tekst</th>
            <th>Dato</th>
          </tr>
          {DisplayWork}
        </tbody>
      </table>
      {adminMode ? (
        <>
          <input
            type={"text"}
            placeholder="Firma"
            value={newCompany}
            onChange={(info) => setNewCompany(info.target.value)}
          />
          <input
            type={"text"}
            placeholder="Title"
            value={newTitle}
            onChange={(info) => setNewTitle(info.target.value)}
          />

          <input
            type={"text"}
            placeholder="Tekst"
            value={newText}
            onChange={(info) => setNewText(info.target.value)}
          />
          <input
            type={"year"}
            value={yearWork}
            onChange={(info) => setYearWork(info.target.value)}
          />

          <PrimaryButton
            disableBtn={false}
            text={"Legg til jobb"}
            onClick={() =>
              setWork((prevList) => [
                ...prevList,
                {
                  company: newCompany,
                  title: newTitle,
                  text: newText,
                  year: yearWork,
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

export default WorkDataDisplay;

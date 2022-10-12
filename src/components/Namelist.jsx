import { useState } from "react";

const NameList = (props) => {
  const { adminMode } = props;
  const [namesList, setNamesList] = useState([
    "Ulrik",
    "Andre",
    "Harpreet",
    "Bjørn",
  ]);
  const [name, setName] = useState("");
  console.log(name);
  console.log(namesList);

  // const handleAddName = () => {
  //   setNamesList((prevList) => [...prevList, name]);
  // };

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  return (
    <div>
      {namesList.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
      {adminMode ? (
        <>
          <input
            type={"text"}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <button
            onClick={() => setNamesList((prevList) => [...prevList, name])}
          >
            Add name
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NameList;

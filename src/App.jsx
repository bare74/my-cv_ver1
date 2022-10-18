import "./App.css";
import { useState } from "react";
import WorkDataDisplay from "./components/Work";
import CourseDataDisplay from "./components/Course";
import SchoolDataDisplay from "./components/School";
import Printer, { print } from "react-pdf-print";
const ids = ["1"];

const App = () => {
  const [adminMode, setAdminMode] = useState(false);

  return (
    <div className={"App"}>
      <button onClick={() => setAdminMode(!adminMode)}>Hidden</button>
      <div className="container">
        <Printer>
          <div id={ids[0]} style={{ width: "210mm", height: "297mm" }}>
            <WorkDataDisplay adminMode={adminMode} />
            <br />
            <hr />
            <br />
            <SchoolDataDisplay adminMode={adminMode} />
            <br />
            <hr />
            <br />
            <CourseDataDisplay adminMode={adminMode} />
            <br />
          </div>
        </Printer>
        <input
          type="button"
          // style={{ position: "relative", float: "right" }}
          onClick={() => print(ids)}
          value="Utskrift PDF"
        />
      </div>
    </div>
  );
};

export default App;

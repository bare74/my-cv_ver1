import "./App.css";

import { useState } from "react";

import Counter from "./components/Counter";
import NameList from "./components/Namelist";
import JsonDataDisplay from "./components/TableList";
// import Printer, { print } from "react-pdf-print";

// const ids = ["1"];

const App = () => {
  const [adminMode, setAdminMode] = useState(false);

  return (
    <div className={"App"}>
      {/* <Printer> */}
      <button onClick={() => setAdminMode(!adminMode)}>Hidden</button>
      {/* <div id={ids[0]} style={{ width: "210mm", height: "297mm" }}> */}
      <Counter />
      <br />
      <hr />
      <NameList adminMode={adminMode} />
      <br />
      <hr />
      <br />
      <JsonDataDisplay adminMode={adminMode} />
      <br />
      <br />
      <br />
      <br />
    </div>
    // </Printer>
    // <input
    //   type="button"
    //   style={{ position: "relative", float: "right" }}
    //   onClick={() => print(ids)}
    //   value="Utskrift PDF"
    // />
    // </div>
  );
};

export default App;

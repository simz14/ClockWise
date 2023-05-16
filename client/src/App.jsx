import { Route, Routes } from "react-router-dom";
import "./App.css";
import Tracker from "./screens/Tracker/Tracker";

function App() {
  return (
    <Routes>
      <Route path={"/tracker"} element={<Tracker />} />
    </Routes>
  );
}

export default App;

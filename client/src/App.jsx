import { Route, Routes } from "react-router-dom";
import "./App.css";
import Tracker from "./screens/Tracker/Tracker";
import Theme from "./utils/Theme/Theme";

function App() {
  return (
    <Theme>
      <Routes>
        <Route path={"/tracker"} element={<Tracker />} />
      </Routes>
    </Theme>
  );
}

export default App;

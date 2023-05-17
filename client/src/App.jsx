import { Route, Routes } from "react-router-dom";
import "./App.css";
import Tracker from "./screens/Tracker/Tracker";
import Login from "./screens/Login/Login";
import Theme from "./utils/Theme/Theme";

function App() {
  return (
    <Theme>
      <Routes>
        <Route path={"/tracker"} element={<Tracker />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </Theme>
  );
}

export default App;

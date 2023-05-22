import { Route, Routes } from "react-router-dom";
import "./App.css";
import Tracker from "./screens/Tracker/Tracker";
import Login from "./screens/Login/Login";
import Theme from "./utils/Theme/Theme";
import Register from "./screens/Register/Register";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Theme>
      <Routes>
        <Route
          path={"/tracker"}
          element={
            <PrivateRoute>
              <Tracker />
            </PrivateRoute>
          }
        />

        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>
    </Theme>
  );
}

export default App;

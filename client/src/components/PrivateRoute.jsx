import { useNavigate } from "react-router-dom";
import { auth } from "../services/auth.service";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    console.log(isAuth);
    const authResponse = async () => {
      try {
        await auth(token ? token : "");
        setIsAuth(true);
      } catch (err) {
        setIsAuth(false);
      }
    };
    authResponse();
  }, [isAuth, token]);

  if (isAuth) {
    console.log(isAuth);
    return <>{children}</>;
  } else {
    navigate("/login");
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;

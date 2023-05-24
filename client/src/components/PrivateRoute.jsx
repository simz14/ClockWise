import { useNavigate } from "react-router-dom";
import { auth } from "../services/auth.service";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const [isAuth, setIsAuth] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const authResponse = async () => {
      try {
        const response = await auth(token ? token : "");
        dispatch(setUser(response));
        setIsAuth(true);
      } catch (err) {
        setIsAuth(false);
      }
    };
    authResponse();
  }, []);

  if (isAuth) {
    return <>{children}</>;
  } else {
    navigate("/login");
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;

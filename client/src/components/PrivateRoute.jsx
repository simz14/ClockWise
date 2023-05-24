import { useNavigate } from "react-router-dom";
import { auth } from "../services/auth.service";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/user";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const [isAuth, setIsAuth] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const authResponse = async () => {
      try {
        const response = await auth(token ? token : "");
        dispatch(setUser(response));
        console.log(user, response);
        setIsAuth(true);
      } catch (err) {
        setIsAuth(false);
      }
    };
    authResponse();
  }, [isAuth, token]);

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

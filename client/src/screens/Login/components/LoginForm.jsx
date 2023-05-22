import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import FormWrapper from "../../../components/FormWrapper";
import { InputAdornment, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { checkUser } from "../../../services/user.service";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  //simulating fetching
  const handleClickLogin = async () => {
    setLoading(true);
    try {
      const response = await checkUser(getValues());
      const responseData = await response.json();
      setTimeout(() => {
        setLoading(false);
        window.localStorage.setItem("token", responseData.jwt);
        setErrorMsg("");
        navigate("/tracker");
      }, [1500]);

      navigate("/");
    } catch (err) {
      setTimeout(() => {
        setErrorMsg(err.message);
        setLoading(false);
      }, [1500]);
    }
  };

  const handleClickShow = () => {
    setVisible((prev) => !prev);
  };

  return (
    <FormWrapper>
      <h3>Sign In</h3>
      <TextField
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Email is not valid",
          },
        })}
        label="Email"
        variant="outlined"
        error={errors.email ? true : false}
        helperText={errors.email?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        {...register("password", {
          required: "Password is required",
        })}
        type={visible ? "text" : "password"}
        label="Password"
        variant="outlined"
        error={errors.password ? true : false}
        helperText={errors.password?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              className="passworIcon"
              onClick={handleClickShow}
              position="end"
            >
              {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </InputAdornment>
          ),
        }}
      />
      <Button
        onClick={handleSubmit(handleClickLogin)}
        title="Login"
        pinkButton={true}
        loading={loading}
      />
      {errorMsg && <p className="error">{errorMsg}</p>}
      <p className="linkTo">
        Don&#39;t have an account? <Link to="/register"> Sign Up</Link>
      </p>
    </FormWrapper>
  );
};

export default LoginForm;

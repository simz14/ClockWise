import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import FormWrapper from "../../../components/FormWrapper";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { checkUser } from "../../../services/user.service";
import { useState } from "react";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleClickLogin = async () => {
    try {
      const response = await checkUser(getValues());
      const responseData = await response.json();
      window.localStorage.setItem("token", responseData.jwt);
      setErrorMsg("");
      navigate("/");
    } catch (err) {
      setErrorMsg(err.message);
    }
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
      />
      <TextField
        {...register("password", {
          required: "Password is required",
        })}
        label="Password"
        variant="outlined"
        error={errors.password ? true : false}
        helperText={errors.password?.message}
      />
      <Button
        onClick={handleSubmit(handleClickLogin)}
        title="Login"
        pinkButton={true}
      />
      {errorMsg && <p>{errorMsg}</p>}
      <p className="linkTo">
        Don&#39;t have an account? <Link to="/register"> Sign In</Link>
      </p>
    </FormWrapper>
  );
};

export default LoginForm;

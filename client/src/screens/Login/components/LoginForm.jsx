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
  const [loading, setLoading] = useState(false);
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
        navigate("/");
      }, [1500]);

      navigate("/");
    } catch (err) {
      setTimeout(() => {
        setErrorMsg(err.message);
        setLoading(false);
      }, [1500]);
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

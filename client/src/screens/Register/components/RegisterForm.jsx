import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import FormWrapper from "../../../components/FormWrapper";
import { InputAdornment, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { addUser } from "../../../services/user.service";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  //simulating fetching
  const handleRegister = async () => {
    setLoading(true);
    try {
      await addUser(getValues());
      setTimeout(() => {
        setLoading(false);
      }, [1500]);

      navigate("/login");
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
      <h3>Sign Up</h3>
      <TextField
        {...register("username", {
          required: "Username is required",
        })}
        label="Username"
        variant="outlined"
        error={errors.username ? true : false}
        helperText={errors.username?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleIcon />
            </InputAdornment>
          ),
        }}
      />
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
        label="Password"
        variant="outlined"
        error={errors.password ? true : false}
        type={visible ? "text" : "password"}
        helperText={errors.password?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              className="passwordIcon"
              onClick={handleClickShow}
              position="end"
            >
              {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </InputAdornment>
          ),
        }}
      />

      <Button
        onClick={handleSubmit(handleRegister)}
        title="Register"
        pinkButton={true}
        loading={loading}
      />
      {errorMsg && <p className="error">{errorMsg}</p>}

      <p className="linkTo">
        Already have an account? <Link to="/login"> Sign In</Link>
      </p>
    </FormWrapper>
  );
};

export default RegisterForm;

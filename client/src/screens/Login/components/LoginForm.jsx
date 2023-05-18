import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import FormWrapper from "../../../components/FormWrapper";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
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
      <Button onClick={handleSubmit()} title="Login" pinkButton={true} />
      <p className="linkTo">
        Don&#39;t have an account? <Link to="/register"> Sign In</Link>
      </p>
    </FormWrapper>
  );
};

export default LoginForm;

import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import FormWrapper from "../../../components/FormWrapper";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
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

      <Button onClick={handleSubmit()} title="Register" pinkButton={true} />
      <p className="linkTo">
        Already have an account? <Link to="/login"> Sign In</Link>
      </p>
    </FormWrapper>
  );
};

export default RegisterForm;

import { styled } from "styled-components";
import RegisterForm from "./components/RegisterForm";

const RegisterWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .error {
    display: flex;
    align-self: center;
    color: ${({ theme }) => theme.colors.brightPurple};
    font-weight: 600;
    margin: 16px 0 0 0;
  }
`;

const Register = () => {
  return (
    <RegisterWrapper>
      <RegisterForm />
    </RegisterWrapper>
  );
};

export default Register;

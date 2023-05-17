import { styled } from "styled-components";
import LoginForm from "./components/LoginForm";

const LoginWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm />
    </LoginWrapper>
  );
};

export default Login;

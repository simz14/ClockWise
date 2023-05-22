import { PropTypes } from "prop-types";
import { styled } from "styled-components";

const StyledForm = styled.div`
  background-color: white;
  min-width: 20rem;
  min-height: 20rem;
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 400px) {
    width: 90%;
    min-width: 10rem;
  }
  .linkTo {
    color: ${({ theme }) => theme.colors.fadePurple};
    font-weight: 600;
    align-self: center;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.mediumPruple};
    }
  }
  .MuiTypography-root {
    color: ${({ theme }) => theme.colors.fadePurple};
  }
`;

const FormWrapper = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

FormWrapper.propTypes = {
  children: PropTypes.node,
};

export default FormWrapper;

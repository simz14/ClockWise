import { PropTypes } from "prop-types";
import { styled } from "styled-components";

const StyledForm = styled.div`
  background-color: white;
  min-width: 20rem;
  min-height: 20rem;
  padding: 2rem;
  border-radius: 15px;
`;

const FormWrapper = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

FormWrapper.propTypes = {
  children: PropTypes.node,
};

export default FormWrapper;

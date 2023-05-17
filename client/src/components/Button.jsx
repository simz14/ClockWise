import { PropTypes } from "prop-types";
import { styled } from "styled-components";

const StyledButton = styled.div`
  border-radius: 10px;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  &.pink {
    background-color: ${({ theme }) => theme.colors.brightPurple};
    color: white;
    transition: 0.5s ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.fadePurple};
      transition: 0.5s ease;
    }
  }
  &.yellow {
    background-color: ${({ theme }) => theme.colors.lightYellow};
    color: ${({ theme }) => theme.colors.darkPurple};
    transition: 0.5s ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.yellowHover};
      transition: 0.5s ease;
    }
  }
`;

const Button = ({ title, onClick, pinkButton }) => {
  return (
    <StyledButton className={pinkButton ? "pink" : "yellow"} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  pinkButton: PropTypes.bool,
};

export default Button;

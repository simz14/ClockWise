import styled from "styled-components";

const StyledBar = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  width: 10rem;
`;

const SideBar = () => {
  return <StyledBar></StyledBar>;
};

export default SideBar;

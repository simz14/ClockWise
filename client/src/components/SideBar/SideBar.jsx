import styled from "styled-components";
import { List } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ListItemComponent from "../ListItemComponent";
import { useSelector } from "react-redux";

const StyledBar = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.mediumPruple};

  .MuiList-root {
    gap: 24px;
    margin: 24px 0;
  }

  .listLabel {
    color: ${({ theme }) => theme.colors.lightText};
    margin: 0;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.fadePurple};
    padding-left: 16px;
  }
  .userInfo {
    padding-left: 16px;
    margin-top: 24px;

    h3 {
      font-size: 15px;
      margin: 0;
      color: ${({ theme }) => theme.colors.lightText};
    }
    h4 {
      font-size: 11px;
      margin: 0;
      color: ${({ theme }) => theme.colors.fadePurple};
    }
  }
`;

const SideBar = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <StyledBar>
      <div className="userInfo">
        <h3>{user?.user.username + "'s work"}</h3>
        <h4>{user?.user.email}</h4>
      </div>
      <List>
        <p className="listLabel">TRACK</p>
        <ListItemComponent text="Timer" icon={<AccessTimeFilledIcon />} />
      </List>
    </StyledBar>
  );
};

export default SideBar;

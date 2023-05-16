import styled from "styled-components";
import { List } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ListItemComponent from "../ListItemComponent";

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
`;

const SideBar = () => {
  return (
    <StyledBar>
      <List>
        <p className="listLabel">TRACK</p>
        <ListItemComponent text="Timer" icon={<AccessTimeFilledIcon />} />
      </List>
    </StyledBar>
  );
};

export default SideBar;

import {
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemText,
  Popover,
} from "@mui/material";
import { useState } from "react";
import { styled } from "styled-components";

const StyledPanel = styled.div`
  min-height: 100vh;
  min-width: 50px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .profile {
    position: relative;
    color: ${({ theme }) => theme.colors.fadePurple};
    padding: 1rem;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgb(168, 118, 245);
  }
`;

const Panel = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const open = Boolean(anchorEl);
  return (
    <StyledPanel>
      <div></div>
      <div>
        <div onClick={(e) => handleOpen(e)} className="profile">
          <div className="circle"></div>
          <p>Profile</p>

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <List>
                <ListItemButton>
                  <ListItemText primary="Profile settings" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="LogOut" />
                </ListItemButton>
              </List>
            </ClickAwayListener>
          </Popover>
        </div>
      </div>
    </StyledPanel>
  );
};

export default Panel;

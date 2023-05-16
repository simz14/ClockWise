import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { PropTypes } from "prop-types";
import { styled } from "styled-components";

const StyledItem = styled(ListItem)`
  .MuiListItemIcon-root {
    min-width: 0;
    color: ${({ theme }) => theme.colors.lightText};
    svg {
      width: 16px;
      height: 16px;
    }
  }
  .MuiButtonBase-root {
    min-width: 10rem;
    gap: 0.5rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.hover};
    }
  }
  .MuiTypography-root {
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 14px;
  }
`;

const ListItemComponent = ({ text, icon }) => {
  return (
    <StyledItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </StyledItem>
  );
};

ListItemComponent.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
};

export default ListItemComponent;

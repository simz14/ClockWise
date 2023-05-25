import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import CircleIcon from "@mui/icons-material/Circle";
import FolderIcon from "@mui/icons-material/Folder";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import moment from "moment";
import { useForm } from "react-hook-form";
import {
  CircularProgress,
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  TextField,
} from "@mui/material";
import { getProjects } from "../../../services/project.service";

const StyledPanel = styled.div`
  width: 100%;
  display: flex;
  box-shadow: rgba(44, 19, 56, 0.2) 0px 2px 12px 0px;
  max-height: 126px;
  height: fit-content;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  .playButton {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.purple};
  }
  .controlPanel {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.fadePurple};
  }
  .time {
    width: 5rem;
    display: flex;
    justify-content: center;
  }
`;

const PlayPanel = () => {
  const [startTime, setStartTime] = useState(null);
  const [trackTime, setTrackTime] = useState("0:00:00");
  const [isTracking, setIsTracking] = useState(false);
  const [projects, setProjects] = useState([]);
  const { register } = useForm();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    let interval = null;

    if (isTracking) {
      interval = setInterval(() => {
        const duration = moment.duration(Date.now() - startTime);
        setTrackTime(moment.utc(duration.asMilliseconds()).format("H:mm:ss"));
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isTracking]);

  const handleStart = () => {
    setIsTracking(true);
    setStartTime(Date.now());
  };

  const handleStop = () => {
    setIsTracking(false);
  };

  const handleClickFolder = (e) => {
    setAnchorEl(e.target);
    const fetchData = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchData();
  };

  console.log(projects);
  return (
    <StyledPanel>
      <div>
        <TextField
          {...register("description")}
          placeholder="What are you working on?"
        />
      </div>
      <div className="controlPanel">
        <FolderIcon onClick={(e) => handleClickFolder(e)} />
        <h3 className="time">{trackTime}</h3>
        <PlayCircleFilledIcon
          className="playButton"
          onClick={() => (isTracking ? handleStop() : handleStart())}
        />
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
          <List>
            {projects ? (
              projects.map((project) => {
                return (
                  <ListItemButton
                    style={{ color: project.color }}
                    key={project.id}
                  >
                    <ListItemIcon
                      style={{ minWidth: "15px", color: project.color }}
                    >
                      <CircleIcon style={{ width: "10px", height: "10px" }} />
                    </ListItemIcon>
                    <ListItemText primary={project.name} />
                  </ListItemButton>
                );
              })
            ) : (
              <CircularProgress />
            )}
            <div className="createProject">
              <p>Create a new project</p>
            </div>
          </List>
        </ClickAwayListener>
      </Popover>
    </StyledPanel>
  );
};

export default PlayPanel;

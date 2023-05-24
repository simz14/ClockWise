import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import moment from "moment";

const StyledPanel = styled.div`
  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.brightPurple};
  }
`;

const PlayPanel = () => {
  const [startTime, setStartTime] = useState(null);
  const [trackTime, setTrackTime] = useState("0:00:00");
  const [isTracking, setIsTracking] = useState(false);

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

  return (
    <StyledPanel>
      <h3>{trackTime}</h3>
      <PlayCircleFilledIcon
        onClick={() => (isTracking ? handleStop() : handleStart())}
      />
    </StyledPanel>
  );
};

export default PlayPanel;

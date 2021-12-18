import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const percentage = 60;
const red = "#F5605B";
const green = "#D5D066";

const Timer = () => {
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: red,
          trailColor: "rgba(255,255,255,0.2",
        })}
      />
    </div>
  );
};

export default Timer;

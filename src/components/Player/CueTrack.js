import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { CueProvider } from "../../common/cue-context";
import CueHandle from "./CueHandle";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#616161",
  },
  cueContainer: {
    position: "relative",
    height: "100%",
    color: "white",
  },
  cueContent: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: 30,
    userSelect: "none",
  },
  content: {
    height: "100%",
  },
  scrollContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

CueTrack.propTypes = {};

export default function CueTrack() {
  const classes = useStyles();
  const cues = useSelector((state) => state.cues.cues);
  return (
    <div className={classes.root}>
      <div className={classes.cueContainer}>
        {cues.map((cue, index) => (
          // WARNING CHANGE key={index} to key={something unique, preferably an id}
          // <CueProvider cue={cue} cueIndex={index} key={index}>
          <CueHandle cue={cue} cueIndex={index} key={index}>
            <div className={classes.cueContent}>
              <Typography color="inherit" variant="h5" noWrap>
                {cue.text}
              </Typography>
            </div>
          </CueHandle>
          // </CueProvider>
        ))}
      </div>
    </div>
  );
}

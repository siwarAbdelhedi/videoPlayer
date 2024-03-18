import React from "react";
import { makeStyles, Slider, withStyles, Button,  Tooltip,  Popover,Grid } from "@material-ui/core";
import {
 FastForward,
 FastRewind,
 Pause,
 PlayArrow,
 SkipNext,
  VolumeUp,
} from "@material-ui/icons";
import Slider from '@mui/material/Slider';
import { Grid, Button, Typography, IconButton } from '@mui/material';

const PrettoSlider = withStyles({
})(Slider);
import "./Control.css";

const Control = () => {
    const classes = useStyles();
    return(
    <div className="control_Container">
          <div className="top_container">
   <h2>Video PLayer</h2>
 </div> 
 <div className="mid__container">
    <div className="icon__btn">
     <FastRewind fontSize="medium" />
    </div>

   <div className="icon__btn">
     <Pause fontSize="medium" />
   </div>

   <div className="icon__btn">
    <FastForward fontSize="medium" />
   </div>
 </div>
 <div className="bottom__container">
 <div className="slider__container">
   <PrettoSlider />
 </div>
 <div className="control__box">
   <div className="inner__controls">
     <div className="icon__btn">
       <PlayArrow fontSize="medium" />
     </div>
     <div className="icon__btn">
       <SkipNext fontSize="medium" />
     </div>
     <div className="icon__btn">
       <VolumeUp fontSize="medium" />
     </div>

     <Slider
             className={`${classes.volumeSlider}`} />
     <span>5/20</span>
     </div>
   </div>
 </div>
    </div>
      )
   }
import * as React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {makeStyles, withStyles} from '@mui/styles';
import Grid from '@mui/material/Grid';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material/Button';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FullScreenIcon from '@mui/icons-material/Fullscreen'
import Popover from '@mui/material/Popover';


const useStyles = makeStyles({
    controlsWrapper: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      zIndex: 1,
    },
    controlIcons: {
      color: "#777",
      fontSize: 50,
      transform: "scale(0.9)",
      "&:hover": {
        color: "#fff",
        transform: "scale(1)",
      },
    },
  
    bottomIcons: {
      color: "#999",
      "&:hover": {
        color: "#fff",
      },
    },
    volumeSlider: {
      width: 100,
    },
  });
  
  function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  
  const PrettoSlider = withStyles({
    root: {
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
  
  const PlayerControls = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopover = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [value, setValue] = React.useState(50);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const open = Boolean(anchorEl);
    const id = open ? "playbackrate-popover" : undefined;
    
    return (
      <div className={classes.controlsWrapper}>
        {/* Top controls */}
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          style={{ padding: 20 }}
        >
          <Grid item>
            <Typography variant="h5" style={{ color: "#fff" }}>
              Video Title
            </Typography>
          </Grid>
  
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              startIcon={<BookmarkIcon />}
            >
              Bookmark
            </Button>
          </Grid>
        </Grid>
  
        {/* middle controls */}
  
        <Grid container direaction="row" alignItems="center" justify="center">
          <IconButton className={classes.controlIcons} aria-label="reqind">
            <FastRewindIcon fontSize="inherit" />
          </IconButton>
  
          <IconButton className={classes.controlIcons} aria-label="reqind">
            <PlayArrowIcon fontSize="inherit" />
          </IconButton>
  
          <IconButton className={classes.controlIcons} aria-label="reqind">
            <FastForwardIcon fontSize="inherit" />
          </IconButton>
        </Grid>
  
        {/* bottom controls */}
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ padding: 16 }}
        >
          <Grid item xs={12}>
            <PrettoSlider
              value={value}
              onChange={handleChange}
              components={{ ValueLabel: ValueLabelComponent }}
              aria-labelledby="continuous-slider"
            />
          </Grid>
  
          <Grid item>
            <Grid container alignItems="center" direction="row">
              <IconButton className={classes.bottomIcons}>
                <PlayArrowIcon fontSize="large" />
              </IconButton>
  
              <IconButton className={classes.bottomIcons}>
                <VolumeUpIcon fontSize="large" />
              </IconButton>
  
              <Slider
                min={0}
                max={100}
                defaultValue={100}
                className={classes.volumeSlider}
              />
  
              <Button variant="text" style={{ color: "#fff", marginLeft: 16 }}>
                <Typography>05:05</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              onClick={handlePopover}
              variant="text"
              className={classes.bottomIcons}
            >
              <Typography>1X</Typography>
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <Grid container direction="column-reverse">
                {[0.5, 1, 1.5, 2].map((rate) => (
                  <Button variant="text">
                    <Typography color="secondary">{rate}</Typography>
                  </Button>
                ))}
              </Grid>
            </Popover>
            <IconButton className={classes.bottomIcons}>
              <FullScreenIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    );
};

export default PlayerControls;
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    backgroundColorPriority: 'important',
    transition: 'background-color 0.5s ease-out',
  },
  appBarSolid: {
    backgroundColor: "green",
  },
}));

const CustomAppBar = () => {
  const classes = useStyles();
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0 && !isSolid) {
        setIsSolid(true);
      } else if (currentScrollY === 0 && isSolid) {
        setIsSolid(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSolid]);

  return (
    <AppBar className={`${classes.appBar} ${isSolid ? classes.appBarSolid : ''}`} position="fixed">
      <Toolbar>
        {/* your custom content here */}hiiiiii
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

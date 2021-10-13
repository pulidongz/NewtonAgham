import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';
import newtonLogo from '../assets/images/Newton-Agham_CMYK.svg';
import banner from '../assets/images/banner1.png';
import bannerVid from '../assets/video/bannervid.mp4';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    logo: {
      padding: theme.spacing(1), //grid padding
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    banner: {
        padding: 0
      },
  }));

export default function Header() {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid>
                <Paper className={classes.logo}>
                    <img src={newtonLogo} height="70" />
                </Paper>
            </Grid>
            <Grid>
                <Paper className={classes.banner}>
                    {/* <img src={banner} style={{width: '100%', objectFit: 'cover'}}/> */}
                    <video width="100%" height="100%" autoPlay loop muted>
                        <source src={bannerVid} type="video/mp4" />
                    </video>
                </Paper>
            </Grid>
        </React.Fragment>
    );
}
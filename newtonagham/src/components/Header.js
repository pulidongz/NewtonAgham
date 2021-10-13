import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@mui/styles';
import newtonLogo from '../assets/images/Newton-Agham_CMYK.svg';
import banner from '../assets/images/banner1.png';
import bannerVid from '../assets/video/Newton_VR_3.mp4';

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
                <Carousel showArrows={true} showThumbs={false}>
                <div>
                    <img src={banner} style={{width: '100%', objectFit: 'cover'}}/>
                </div>
                <div>
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <video width="100%" height="100%" autoPlay loop muted>
                            <source src={bannerVid} type="video/mp4" />
                        </video>
                        <a href="https://www.britishcouncil.ph/programmes/education/newton-agham-programme/virtual-reception?fbclid=IwAR0PSb1ojJJPLwP9fDnbBNNWfeQE7x24pZJ353b7CIpjg57kKUYE8dbrznM" target="_blank">
                            <p className="legend" style={{width: '20vh', bottom: 20, marginLeft: '-10vh'}}>Visit for more details</p>
                        </a>
                    </Grid>
                </div>
                </Carousel>

            </Grid>
        </React.Fragment>
    );
}
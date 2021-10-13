import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';
import banner from '../assets/images/banner1.png';
import footerImage from '../assets/images/footer.png';

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
        padding: 0,
        height: '20vh',
        backgroundColor: '#266ebc'
      },
  }));


  export default function Footer() {
    const classes = useStyles();
    return(
        <React.Fragment>
            {/* <Grid container className={classes.banner}> */}
            {/* <div className={classes.banner}> */}
            <img src={footerImage} alt="footer_image" style={{width: '100%', height: '65vh', objectFit: 'cover'}} />
            {/* </div> */}
                
            {/* </Grid> */}
        </React.Fragment>
        

    );
  }
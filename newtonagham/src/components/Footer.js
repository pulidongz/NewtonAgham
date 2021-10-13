import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

import { makeStyles } from '@mui/styles';
import banner from '../assets/images/banner1.png';
import footerImage from '../assets/images/footer.png';


import britishCouncil from '../assets/images/logos/uk/British_Council.png';
import bbsrc from '../assets/images/logos/uk/BBSRC.png';
import innovateUk from '../assets/images/logos/uk/Innovate UK.png';
import metOffice from '../assets/images/logos/uk/metOffice.png';
import mrc from '../assets/images/logos/uk/MRC.png';
import nerc from '../assets/images/logos/uk/NERC.png';
import raeng from '../assets/images/logos/uk/RAEng.png';
import ukri from '../assets/images/logos/uk/UKRI-Logo_Horiz-RGB.png';

import ched from '../assets/images/logos/ph/CHED.png';
import da from '../assets/images/logos/ph/DA.png';
import dost from '../assets/images/logos/ph/DOST.png';


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
    whiteFont:{
        color: '#fff',
        // paddingBottom: 5,
    }
  }));


  export default function Footer() {
    const classes = useStyles();
    return(
        <React.Fragment>
            {/* <Grid container className={classes.banner}> */}
            {/* <div className={classes.banner}> */}
            {/* <img src={footerImage} alt="footer_image" style={{width: '100%', height:'57vh', objectFit: 'cover'}} /> */}
            {/* </div> */}
                
            {/* </Grid> */}

            {/* <Grid style={{backgroundImage: `url(${footerImage})`, width: '100%', height:'60vh', objectFit: 'cover'}}> */}
            
            {/* <Grid style={{backgroundColor: '#266ebc', width: '100', objectFit: 'cover'}}> */}

            <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center" style={{backgroundColor: '#266ebc', width: '100', height: 450, objectFit: 'cover'}}>

              {/* UK GRID */}
              <Grid container spacing={0}
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start" xs={4} md={4} lg={4}>

                {/* UK Partners */}
                <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                  <Grid item>
                    <Typography variant="h5" className={classes.whiteFont}>
                        UK Partners:
                    </Typography>
                  </Grid>
                </Grid>

                {/* UK LOGOS */}
                <Grid container direction="row" justifyContent="center" alignItems="center">
                  <Grid item xs={6} md={6} lg={6}>
                    <img src={britishCouncil} alt="britishCouncil" style={{width: 200, height:'40%', objectFit: 'cover'}} />
                  </Grid>
                  <Grid item xs={6} md={6} lg={6}>
                    <img src={raeng} alt="raeng" style={{width: 200, height:'40%', objectFit: 'cover'}} />
                  </Grid>
                  <Grid item xs={6} md={6} lg={6}>
                    <img src={metOffice} alt="metOffice" style={{width: 200, height:'30%', objectFit: 'cover'}} />
                  </Grid>
                  <Grid xs={6} md={6} lg={6}>
                    <img src={bbsrc} alt="bbsrc" style={{width: 200, height:'40%', objectFit: 'cover'}} />
                  </Grid>
                  <Grid item xs={6} md={6} lg={6}>
                    <img src={mrc} alt="mrc" style={{width: 200, height:'40%', objectFit: 'cover'}} />
                  </Grid>
                  <Grid xs={6} md={6} lg={6}>
                    <img src={nerc} alt="nerc" style={{width: 200, height:'40%', objectFit: 'cover'}} />
                  </Grid>
                  <Grid xs={6} md={6} lg={6}>
                    <img src={innovateUk} alt="innovateUk" style={{width: 200, height:'40%', objectFit: 'cover'}} />
                  </Grid>
                  <Grid xs={6} md={6} lg={6}>
                    <img src={ukri} alt="ukri" style={{width: 200, height:'40%', objectFit: 'cover'}} />
                  </Grid>
                </Grid>
              </Grid>

              {/* PH GRID */}
              <Grid container spacing={2}
              direction="column"
              justifyContent="center"
              alignItems="center" xs={4} md={4} lg={4}>
                <Grid item>
                <Typography variant="h5" className={classes.whiteFont}>
                   PH Partners:
                </Typography>
                </Grid>
                <Grid item>
                  <img src={dost} alt="dost" style={{width: 75, height:'20%', objectFit: 'cover'}} />
                </Grid>
                <Grid item >
                  <img src={ched} alt="ched" style={{width: 75, height:'20%', objectFit: 'cover'}} />
                </Grid>
                <Grid item >
                  <img src={da} alt="da" style={{width: 75, height:'20%', objectFit: 'cover'}} />
                </Grid>
              </Grid>
              
              {/* TEXT GRID */}
              <Grid container
              direction="column"
              justifyContent="center"
              alignItems="flex-start" xs={3} md={3} lg={3}>

                <Grid item xs={12}>
                <Typography variant="h6" className={classes.whiteFont}>
                    <a className="nodecorate" href="https://www.newton-gcrf.org/impact/where-we-work/philippines/" 
                    target="_blank" rel="noreferrer">
                      About Newton Agham Fund</a>
                </Typography>
                </Grid>

                <Grid item xs={12}>
                <Typography variant="h6" className={classes.whiteFont}>
                    Connect with us
                </Typography>
                </Grid>

                {/* //Twitter logo */}
                <Grid item xs={12}>
                <Typography variant="h6" className={classes.whiteFont}>
                  <a className="nodecorate" href="https://mobile.twitter.com/newtonfund?lang=en" 
                      target="_blank" rel="noreferrer">
                  <TwitterIcon /> Twitter
                  </a>
                </Typography>
                </Grid>


                <Grid item xs={12} style={{paddingTop: 30}}>
                <Typography variant="h6" className={classes.whiteFont}>
                    For inquiries and information:
                </Typography>
                </Grid>

                <Grid item xs={12} style={{paddingTop: 20}}>
                <Typography variant="h6" className={classes.whiteFont}>
                    Sarah Esguerra
                </Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="h6" className={classes.whiteFont}>
                    British Embassy Manila
                </Typography>
                </Grid>

                <Grid item xs={12}>
                <Typography variant="h6" className={classes.whiteFont}>
                  <a className="nodecorate" href="mailto:sarah.esguerra@fcdo.gov.uk">sarah.esguerra@fcdo.gov.uk</a>
                </Typography>
                </Grid>

                <Grid item xs={12} style={{paddingTop: 20}}>
                <Typography variant="h6" className={classes.whiteFont}>
                    Danie Son Gonzalvo
                </Typography>
                </Grid>

                <Grid item xs={12}>
                <Typography variant="h6" className={classes.whiteFont}>
                    <a className="nodecorate" href="https://www.britishcouncil.ph/programmes/education/newton-agham-programme" 
                      target="_blank" rel="noreferrer">British Council Philippines
                    </a>
                </Typography>
                </Grid>

                <Grid item xs={12}>
                <Typography variant="h6" className={classes.whiteFont}>
                <a className="nodecorate" href="mailto:danieson.gonzalvo@britishcouncil.org.ph">danieson.gonzalvo@britishcouncil.org.ph</a>
                </Typography>
                </Grid>

            </Grid>


            </Grid>
            {/* </Grid> */}
        </React.Fragment>
        

    );
  }
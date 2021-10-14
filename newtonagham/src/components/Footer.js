import * as React from 'react';
import { Grid, Typography } from '@mui/material';
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
            <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center" style={{backgroundColor: '#266ebc', width: '100%', position:'relative', padding: 40}}>
              
              {/* TEXT GRID LEFT*/}
              <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" xs={12} md={3} lg={3}>
                <Grid item xs={12} style={{paddingBottom: 30}}>
                  <Typography variant="body1" className={classes.whiteFont}>
                      <a className="nodecorate" href="https://www.newton-gcrf.org/impact/where-we-work/philippines/" 
                      target="_blank" rel="noreferrer">
                        About Newton Agham Fund</a>
                  </Typography>
                </Grid>
                
                <Grid item xs={12}>
                <Typography variant="body1" className={classes.whiteFont}>
                    Connect with us
                </Typography>
                </Grid>
                {/* //Twitter logo */}
                <Grid item xs={12}>
                <Typography variant="body1" className={classes.whiteFont}>
                  <a className="nodecorate" href="https://mobile.twitter.com/newtonfund?lang=en" 
                      target="_blank" rel="noreferrer">
                  <TwitterIcon /> Twitter
                  </a>
                </Typography>
                </Grid>
            </Grid>

            {/* //IMAGE GRID RIGHT */}
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" xs={12} md={3} lg={3}>
            <Grid item xs={12} style={{paddingTop: 30}}>
                <Typography variant="body1" className={classes.whiteFont}>
                    For inquiries and information:
                </Typography>
                </Grid>

                <Grid item xs={12} style={{paddingTop: 20}}>
                <Typography variant="body1" className={classes.whiteFont}>
                    Sarah Esguerra
                </Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="body1" className={classes.whiteFont}>
                    British Embassy Manila
                </Typography>
                </Grid>

                <Grid item xs={12}>
                <Typography variant="body1" className={classes.whiteFont}>
                  <a className="nodecorate" href="mailto:sarah.esguerra@fcdo.gov.uk">sarah.esguerra@fcdo.gov.uk</a>
                </Typography>
                </Grid>

                <Grid item xs={12} style={{paddingTop: 20}}>
                <Typography variant="body1" className={classes.whiteFont}>
                    Danie Son Gonzalvo
                </Typography>
                </Grid>

                <Grid item xs={12}>
                <Typography variant="body1" className={classes.whiteFont}>
                    <a className="nodecorate" href="https://www.britishcouncil.ph/programmes/education/newton-agham-programme" 
                      target="_blank" rel="noreferrer">British Council Philippines
                    </a>
                </Typography>
                </Grid>

                <Grid item xs={12}>
                <Typography variant="body1" className={classes.whiteFont}>
                <a className="nodecorate" href="mailto:danieson.gonzalvo@britishcouncil.org.ph">danieson.gonzalvo@britishcouncil.org.ph</a>
                </Typography>
                </Grid>

            </Grid>

            </Grid>
        </React.Fragment>
    );
  }
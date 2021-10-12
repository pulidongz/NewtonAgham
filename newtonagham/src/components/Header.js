import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';
import newtonLogo from '../assets/images/Newton-Agham_CMYK.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1), //grid padding
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }));

export default function Header() {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid item>
                <Paper className={classes.paper}>
                    <img src={newtonLogo} height="70" />
                </Paper>
            </Grid>
            <Grid item>
                <Paper className={classes.paper} style={{height: 300, backgroundColor: '#266ebc'}}>
                    <Grid container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    >
                    <Grid item>
                        <Typography variant="h2" style={{color: '#fff'}}>Newton Agham Fund</Typography>
                    </Grid>
                        
                    </Grid>
                    <Grid item>
                        <Typography variant="h2" style={{color: '#fff'}}>Online Project</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2" style={{color: '#fff'}}>Gallery</Typography>
                    </Grid>
                </Paper>
            </Grid>
        </React.Fragment>
    );
}
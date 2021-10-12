import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Button, Card,
    CardActionArea,
    CardContent,
    CardMedia,
    FormLabel, } from '@mui/material';

import { makeStyles } from '@mui/styles';
import lab from './assets/images/lab.jpg';

const useStyles = makeStyles({
    card: { 
        display: 'flex',
        margin: 'auto',
        flexWrap: 'wrap',
        padding: 0,
    },
    media: {
      height: 200,
    },
		cardContent: {
			height: 220,
			textAlign: "center"
		}
  });

export default function Agri(){
    const classes = useStyles();
    return (
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>Agritechnology & Food Security</Typography>
            <Typography style={{color: 'gray'}}>
                increasing agricultural productivity and addressing food security issues as production is likely to be hindered by the impact of climate change.
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>Posters</Typography>
            <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardActionArea onClick={()=>{}}>
                            <CardMedia
                            className={classes.media}
                            image={lab}
                            title="Test"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardActionArea onClick={()=>{}}>
                            <CardMedia
                            className={classes.media}
                            image={lab}
                            title="Test"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardActionArea onClick={()=>{}}>
                            <CardMedia
                            className={classes.media}
                            image={lab}
                            title="Test"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <br/>
            <Typography>Videos</Typography>
            <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardActionArea onClick={()=>{}}>
                            <CardMedia
                            className={classes.media}
                            image={lab}
                            title="Test"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardActionArea onClick={()=>{}}>
                            <CardMedia
                            className={classes.media}
                            image={lab}
                            title="Test"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardActionArea onClick={()=>{}}>
                            <CardMedia
                            className={classes.media}
                            image={lab}
                            title="Test"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <br/>
            </AccordionDetails>
        </Accordion>
    );
}
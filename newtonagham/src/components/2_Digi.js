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

export default function Digi(){
    const classes = useStyles();
    return (
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Digital Innovation & Creativity</Typography>
            <Typography style={{color: 'gray'}}>
            Reducing the burden of infectious and lifestyle diseases, including research on diagnostic, e-health systems and biomedical device development.
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
    );
}
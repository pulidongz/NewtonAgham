import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Button } from '@mui/material';

import { makeStyles } from '@mui/styles';

import PriorityAreas from './PriorityAreas';

// JSON IMPORTS
const json_agri = require('../json/agri.json');
const json_digi = require('../json/digi.json');
const json_energy = require('../json/energy.json');
const json_envi = require('../json/envi.json');
const json_future = require('../json/future.json');
const json_health = require('../json/health.json');

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

export default function LandingPage() {
    const classes = useStyles();
    
    return(
        <React.Fragment>
            <Grid style={{paddingLeft: '15%', paddingRight: '15%'}}>
                <Typography variant="h4" component="div" gutterBottom style={{textAlign: 'center'}}>
                    Newton Agham Fund Online Project Gallery
                </Typography>
                <br/>
                <Typography variant="body1" component="div" gutterBottom>
                    The Newton Agham Fund is a collaboration between the UK and the Philippines to promote science and innovation partnerships, strengthen mutual capacity, and support technologies that address development challenges in the Philippines and the region. Since its roll-out in 2014, the Fund has supported a number of capacity building activities and joint research and development initiatives related to various priority areas including agri-technology and food security, health and life sciences, digital innovation and creativity, environmental resilience, future cities, and energy security.
                    
                    
                    
                    
                     The Newton Agham Fund is delivered by UK partners including British Council, Royal Academy of Engineering, UK Met Office,  Biotechnology and Biological Sciences Research Council (BBSRC), Medical Research Council (MRC), Natural Environment Research Council (NERC), Innovate UK, and UK Research and Innovation (UKRI), in partnership with the Philippine partners Department of Science and Technology (DOST), Commission on Higher Education (CHED), and Department of Agriculture (DA).
                </Typography>

                <Button variant="outlined">Learn more</Button>

                <br/>
                <Typography variant="body1" display="block" gutterBottom>
                    This online gallery showcases some of the programmes and projects supported by the Newton Agham Fund over the years.  Together with the Newton Agham Virtual Reception on 21 October 2021, co-hosted by the British Embassy Manila and the British Council, the activity is a celebration of the eight years of implementation of the Newton Agham Fund and the science and innovation partnerships between the UK and the Philippines that it has promoted.
                </Typography>
                <br/>
                <Typography variant="body1" display="block" gutterBottom>
                    Feel free to also check out the some of the publications resulting from the Newton Fund / Newton Agham Fund supported initiatives which you can find here:
                </Typography>
                <br/>
                
                {/* Agritechnology & Food Security */}
                <PriorityAreas json={json_agri} />

                {/* Digital Innovation & Creativity */}
                <PriorityAreas json={json_digi} />

                {/* Energy Security */}
                <PriorityAreas json={json_energy} />

                {/* Environmental Resilience */}
                <PriorityAreas json={json_envi} />

                {/* Future Cities */}
                <PriorityAreas json={json_future} />

                {/* Health & Life Sciences */}
                <PriorityAreas json={json_health} />

            </Grid>
        </React.Fragment>
    );
}

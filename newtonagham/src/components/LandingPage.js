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

import Agri from './1_Agri';
import Digi from './2_Digi';
import Energy from './3_Energy';
import Envi from './4_Envi';
import Future from './5_Future';
import Health from './6_Health';

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
    const json_agri = {
        "title": "Agritechnology & Food Security",
        "definition": "Increasing agricultural productivity and addressing food security issues as production is likely to be hindered by the impact of climate change",
        "posters": [
            {
                "title": "Development of CRISPR/Cas9-based novel vaccines against poultry viruses",
                "url": "",
                "thumbnail": "http://172.105.115.102:8080/thumbnails/AgriPoster1.png"
            },
            {
                "title": "Local Approaches to Supporting Agricultural Productivity and Managing Impacts of Climate Variability and Change in Indigenous Communities in Aurora Province, Philippines",
                "url": "",
                "thumbnail": "http://172.105.115.102:8080/thumbnails/AgriPoster2.png"
            },
            {
                "title": "Low-cost Portable Molecular Diagnostic Platform (LMDP) for rapid detection of select poultry pathogens in the Philippines",
                "url": "",
                "thumbnail": "http://172.105.115.102:8080/thumbnails/AgriPoster3.png"
            },
            {
                "title": "Towards improving rice dietary fibre content and composition for human health",
                "url": "",
                "thumbnail": "http://172.105.115.102:8080/thumbnails/AgriPoster4.png"
            },
        ],
        "videos": [
            {
                "title": "Assessing chemical and genetic diversity of Philippine microbes for discovery of novel natural products with applications in medicine and agriculture",
                "url": "https://youtu.be/gvCc0TDetTE",
                "thumbnail": "http://172.105.115.102:8080/thumbnails/AgriVideo1.png"
            },
            {
                "title": "Co-production of knowledge with Indigenous peoples for UN Sustainable Development Goals (SDGs) with emphasis on the Higaonon Food Ethnobotany, and Discovery of a new Begonia species in Mindanao, Philippines",
                "url": "https://youtu.be/K3oZSRBkWGQ",
                "thumbnail": "http://172.105.115.102:8080/thumbnails/AgriVideo2.png"
            },
            {
                "title": "Marine spatial planning of aquaculture facilities in the Philippines: protecting biodiversity whilst maximising economic returns for local communities",
                "url": "https://youtu.be/AfAjNqwWxnk",
                "thumbnail": "http://172.105.115.102:8080/thumbnails/AgriVideo3.png"
            },
            {
                "title": "Understanding Bacterial Enteric Diseases and Antimicrobial Resistance",
                "url": "https://youtu.be/RWEQiF9har0",
                "thumbnail": "http://172.105.115.102:8080/thumbnails/AgriVideo4.png"
            }
        ]
    }


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
                <Agri json={json_agri} />

                {/* Digital Innovation & Creativity */}
                <Digi />

                {/* Energy Security */}
                <Energy />

                {/* Environmental Resilience */}
                <Envi />

                {/* Future Cities */}
                <Future />

                {/* Health & Life Sciences */}
                <Health />
            </Grid>
        </React.Fragment>
    );
}

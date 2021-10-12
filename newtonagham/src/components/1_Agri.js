import * as React from 'react';
import ReactPlayer from 'react-player/youtube';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Button, Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Dialog,
    DialogContent } from '@mui/material';

import { makeStyles } from '@mui/styles';
import lab from './assets/images/lab.jpg';

import AgriVideo1 from '../assets/images/1_Agri/video/AgriVideo1.png';
import AgriVideo2 from '../assets/images/1_Agri/video/AgriVideo2.png';
import AgriVideo3 from '../assets/images/1_Agri/video/AgriVideo3.png';
import AgriVideo4 from '../assets/images/1_Agri/video/AgriVideo4.png';

const AgriVideo1Url = 'https://youtu.be/gvCc0TDetTE'
const AgriVideo2Url = 'https://youtu.be/K3oZSRBkWGQ'
const AgriVideo3Url = 'https://youtu.be/AfAjNqwWxnk'
const AgriVideo4Url = 'https://youtu.be/RWEQiF9har0'

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
        height: 75,
        textAlign: "center"
    },
    dialogContent: {
        position: 'relative',
        padding: 5,
    },
});

export default function Agri(props){
    const classes = useStyles();
    const {json} =  props;
    const [openModal, setOpenModal] = React.useState(false);
    const [thumbnail, setThumbnail] = React.useState('');
    const [url, setUrl] = React.useState('');

    const closeModal = () => {
        setOpenModal(false);
        setThumbnail('');
        setUrl('');
    }

    return (
        <React.Fragment>
        <Accordion className={Agri}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>{json.title}</Typography>
            <Typography style={{color: 'gray'}}>
                {json.definition}
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>Posters</Typography>
            <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardActionArea 
                            onClick={()=>{}}
                        >
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
            <Grid container spacing={3} direction="row" justifyContent="flex-start" alignItems="center">
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardActionArea 
                            onClick={()=>{
                            setOpenModal(true);
                            setThumbnail(AgriVideo1);
                            setUrl(AgriVideo1Url);
                            }}
                        >
                            <CardMedia
                            className={classes.media}
                            image={AgriVideo1}
                            title="Assessing chemical and genetic diversity of Philippine microbes for discovery of novel natural products with applications in medicine and agriculture"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body2" color="text.secondary">
                                Assessing chemical and genetic diversity of Philippine microbes for discovery of novel natural products with applications in medicine and agriculture
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardActionArea 
                            onClick={()=>{
                            setOpenModal(true);
                            setThumbnail(AgriVideo2);
                            setUrl(AgriVideo2Url);
                            }}
                        >
                            <CardMedia
                            className={classes.media}
                            image={AgriVideo2}
                            title="Co-production of knowledge with Indigenous peoples for UN Sustainable Development Goals (SDGs) with emphasis on the Higaonon Food Ethnobotany, and Discovery of a new Begonia species in Mindanao, Philippines"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body2" color="text.secondary">
                                Co-production of knowledge with Indigenous peoples for UN Sustainable Development Goals (SDGs) with emphasis on the Higaonon Food Ethnobotany, and Discovery of a new Begonia species in Mindanao, Philippines
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardActionArea 
                            onClick={()=>{
                            setOpenModal(true);
                            setThumbnail(AgriVideo3);
                            setUrl(AgriVideo3Url);
                            }}
                        >
                            <CardMedia
                            className={classes.media}
                            image={AgriVideo3}
                            title="Marine spatial planning of aquaculture facilities in the Philippines: protecting biodiversity whilst maximising economic returns for local communities"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body2" color="text.secondary">
                                Marine spatial planning of aquaculture facilities in the Philippines: protecting biodiversity whilst maximising economic returns for local communities
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardActionArea 
                            onClick={()=>{
                            setOpenModal(true);
                            setThumbnail(AgriVideo4);
                            setUrl(AgriVideo4Url);
                            }}
                        >
                            <CardMedia
                            className={classes.media}
                            image={AgriVideo4}
                            title="Marine spatial planning of aquaculture facilities in the Philippines: protecting biodiversity whilst maximising economic returns for local communities"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body2" color="text.secondary">
                                Understanding Bacterial Enteric Diseases and Antimicrobial Resistance
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <br/>
            </AccordionDetails>
        </Accordion>

        <Dialog onClose={closeModal} open={openModal}>
        <DialogContent className={classes.dialogContent}>
            <Grid>
                <ReactPlayer className='react-player' url={url} controls={true} />
            </Grid>
        </DialogContent>
        </Dialog>
    </React.Fragment>
    );
}
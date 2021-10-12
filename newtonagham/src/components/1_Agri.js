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

    console.log(json.posters);

    json.posters.map(posters => {
        console.log(posters.title);
    });

    return (
        <React.Fragment>
        <Accordion>
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
            <Typography variant="h6" >Posters</Typography>
            <Grid container spacing={3} direction="row" justifyContent="flex-start" alignItems="center">
                {json.posters.map((posters, index) => (
                    <Grid item xs={4} key={index}>
                        <Card className={classes.card}>
                            <CardActionArea 
                                onClick={()=>{}}
                            >
                                <CardMedia
                                className={classes.media}
                                image={posters.thumbnail}
                                title={posters.title}
                                />
                            </CardActionArea>
                        </Card>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="body2" color="text.secondary">
                            {posters.title}
                            </Typography>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
            <br/>
            <Typography variant="h6" >Videos</Typography>
            <Grid container spacing={3} direction="row" justifyContent="flex-start" alignItems="center">
                {json.videos.map((videos, index) => (
                    <Grid item xs={4} key={index}>
                        <Card className={classes.card}>
                        <CardActionArea 
                            onClick={()=>{
                            setOpenModal(true);
                            setThumbnail(videos.thumbnail);
                            setUrl(videos.url);
                            }}
                        >
                            <CardMedia
                            className={classes.media}
                            image={videos.thumbnail}
                            title={videos.title}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body2" color="text.secondary">
                                {videos.title}
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
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
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
        padding: 5
    },
    expandedPanel: {
        backgroundColor: '#266ebc',
    }
});

export default function PriorityAreas(props){
    const classes = useStyles();
    const {json} =  props;
    const [openPdfModal, setOpenPdfModal] = React.useState(false);
    const [openVideoModal, setOpenVideoModal] = React.useState(false);
    const [thumbnail, setThumbnail] = React.useState('');
    const [url, setUrl] = React.useState('');

    const closeModal = () => {
        setOpenPdfModal(false);
        setOpenVideoModal(false);
        setThumbnail('');
        setUrl('');
    }

    return (
        <React.Fragment>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>{json.title}</Typography>
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
                                onClick={()=>{
                                    setOpenPdfModal(true);
                                    setThumbnail(posters.thumbnail);
                                    setUrl(posters.url);
                                }}
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
                            setOpenVideoModal(true);
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

        {/* PDF VIEWER MODAL */}
        <Dialog onClose={closeModal} open={openPdfModal}>
        <DialogContent>
            <Grid>
                <iframe src={url} title="title" width="800" height="800" frameborder="0"></iframe>
            </Grid>
        </DialogContent>
        </Dialog>

        {/* VIDEO PLAYER MODAL */}
        <Dialog onClose={closeModal} open={openVideoModal}>
        <DialogContent className={classes.dialogContent}>
            <Grid>
                <ReactPlayer className='react-player' url={url} controls={true} />
            </Grid>
        </DialogContent>
        </Dialog>
    </React.Fragment>
    );
}
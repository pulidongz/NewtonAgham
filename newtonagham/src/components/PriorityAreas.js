import * as React from 'react';
import ReactPlayer from 'react-player/youtube';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
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
        maxHeight: 200,
        textAlign: "center",
    },
    dialogContent: {
        position: 'relative',
        padding: 5
    },
    expandedPanel: {
        backgroundColor: '#266ebc',
    },
    pdfModal:{
        width: '95%',
        // height: '100%',
        // padding: 0,
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

    const openPDFNextTab = (pdfUrl) => {
        window.open(pdfUrl);
      };

    return (
        <React.Fragment>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h5" sx={{ width: '50%', flexShrink: 0 }}>{json.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start">

                    <Grid item xs={12}>   
                        <Typography variant="body1">{json.definition}</Typography>
                    </Grid>    
                    <Grid item xs={12}>
                        <Typography variant="h6" >Posters</Typography>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Grid container spacing={3} direction="row" justifyContent="flex-start" alignItems="center">
                            {json.posters.map((posters, index) => (
                                <Grid item xs={12} md={4} lg={4} key={index}>
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
                                            <CardContent className={classes.cardContent} >
                                                <Typography variant="body2" color="text.secondary">
                                                {posters.title}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid item xs={12}>
                        <Typography variant="h6" >Videos</Typography>
                    </Grid>
                    
                    <Grid item xs={12}>
                    <Grid container spacing={3} direction="row" justifyContent="flex-start" alignItems="center">
                        {json.videos.map((videos, index) => (
                            <Grid item xs={12} md={4} lg={4} key={index}>
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
                    </Grid>
                    <br/>
                </Grid>

            </AccordionDetails>
        </Accordion>

        {/* PDF VIEWER MODAL */}
        <Dialog onClose={closeModal} open={openPdfModal} classes={{paper : classes.pdfModal}}>
        <DialogContent style={{padding: 0}}>
            <Grid style={{textAlign: 'center', padding: 10}}>
                <Button variant="contained" onClick={(e) => openPDFNextTab(url)} >View Full Size</Button>
            </Grid>
            <iframe src={url} title="title" width="100%" height='700' frameBorder="0"></iframe>
        </DialogContent>
        </Dialog>

        {/* VIDEO PLAYER MODAL */}
        <Dialog onClose={closeModal} open={openVideoModal} >
        <div className="player-wrapper">
            <ReactPlayer className='react-player' url={url} controls={true}/>
        </div>
        </Dialog>
    </React.Fragment>
    );
}
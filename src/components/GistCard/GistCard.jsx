import React from 'react';
import {Card, 
    CardContent, 
    Typography, 
    CardActionArea,
    CardMedia,
    CardActions,
    Collapse, 
    Button} from '@material-ui/core';

import styles from './GistCard.module.css';



const GistCard = (props) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={styles.card}>
            <CardActionArea>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={props.gist_data.owner.avatar_url}
                title="Contemplative Reptile"
            />
                <CardContent>
                    <Typography variant='h5'>{props.gist_data.owner.login}</Typography>
                    <Typography color='textSecondary' gutterBottom>{props.gist_data.description}</Typography>
                    <Typography color='textSecondary'>{props.gist_data.created_at}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary" onClick={handleExpandClick}>
                More
            </Button>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                </Typography>
                </CardContent>
            </Collapse>
            </CardActions>
        </Card>
    )
}

export default GistCard;
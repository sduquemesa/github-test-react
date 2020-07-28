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

    const handleCardClick = () => {
        setExpanded(!expanded);
    };

    const files = props.gist_data.files;
    var files_data = [];
    for (var key in files){
        var value =  files[key];
        files_data.push(
            {name:key, 
            url:value.raw_url}
            );
    }

    return (
        <Card className={styles.card}>
            <CardActionArea onClick={handleCardClick}>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={props.gist_data.owner.avatar_url}
                title="Profile Avatar"
            />
                <CardContent>
                    <Typography variant='h5'>{props.gist_data.owner.login}</Typography>
                    <Typography color='textSecondary' gutterBottom>{props.gist_data.description}</Typography>
                    <Typography color='textSecondary'>{props.gist_data.created_at}</Typography>
                </CardContent>
                <Button size="small" 
                        color="primary" 
                        onClick={handleExpandClick}
                        >    
                    {expanded ? 'Less' : 'More'}
                </Button>
            </CardActionArea>
            <CardActions>
                
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <a href={props.gist_data.owner.html_url} 
                            rel="noopener noreferrer" 
                            target="_blank"   
                            className = {styles.link}
                        >
                            View Github Profile
                        </a>

                        <Typography variant='h6'>gist files:</Typography>
                        <ul className={styles.list}>
                            { files_data.map( (file, index) => {
                                return (
                                    <li>
                                        <a href={file.url} 
                                        rel="noopener noreferrer" 
                                        target="_blank"   
                                        className = {styles.link}>
                                            {file.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>

                    </CardContent>
                </Collapse>
            </CardActions>
        </Card>
    )
}

export default GistCard;
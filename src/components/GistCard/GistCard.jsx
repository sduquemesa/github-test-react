import React from 'react';
import {Card, CardContent, Typography, Grid, Button} from '@material-ui/core';



const GistCard = (props) => {
    // console.log(props.gist_data);
    return (
        <>
            <p>{props.gist_data.owner.login}</p>
            <p>{props.gist_data.owner.avatar_url}</p>   
            <p>{props.gist_data.description}</p>
            <p>{props.gist_data.created_at}</p>
        </>
    )
}

export default GistCard;
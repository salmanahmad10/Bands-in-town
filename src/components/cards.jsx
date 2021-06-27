import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../styles/card.scss';


const card=(props)=>{

  return (
    <Card className="card">
      <div className="card-body">
        <CardContent className="card-content">
          <Typography component="h5" variant="h5">
            <a href="">
            {props.artist_name}
            </a>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <a href={props.facebook_url} className="fb-link" target="_blank">{props.facebook_url}</a>
          </Typography>
        </CardContent>
        
      </div>
      <CardMedia
        className="card-image"
        image={props.image}
        title="Live from space album cover"
      />
    </Card>
  );
}
export default card;

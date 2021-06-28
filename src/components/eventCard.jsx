import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EmojiEventsTwoToneIcon from '@material-ui/icons/EmojiEventsTwoTone';
import MusicNoteTwoToneIcon from '@material-ui/icons/MusicNoteTwoTone';
import LanguageTwoToneIcon from '@material-ui/icons/LanguageTwoTone';
import EventTwoToneIcon from '@material-ui/icons/EventTwoTone';
const eventCard=(props)=> {
    
  return (
      
    <Card className="root" variant="outlined">
      <CardContent>
        <Typography className="event-card-title" color="textSecondary" gutterBottom>
          <MusicNoteTwoToneIcon/><h3>{props.event["venue"]["name"]}</h3>
  
         
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className="event-card-pos" color="textSecondary">
         <LanguageTwoToneIcon/> {props.event["venue"]["country"]}
        </Typography>
        <Typography className="event-card-pos" color="textSecondary">
         <LocationCityIcon/> {props.event["venue"]["city"]}
        </Typography>
        <Typography className="event-card-pos" color="textSecondary">
         <EventTwoToneIcon/> {props.event["datetime"]}
        </Typography>
       
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default eventCard;
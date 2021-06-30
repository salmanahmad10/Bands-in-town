import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MusicNoteTwoToneIcon from '@material-ui/icons/MusicNoteTwoTone';
import LanguageTwoToneIcon from '@material-ui/icons/LanguageTwoTone';
import EventTwoToneIcon from '@material-ui/icons/EventTwoTone';


const timeFormat=(time)=>{
  var timeString=time;
  var H = +timeString.substr(0, 2);
  var h = H % 12 || 12;
  var ampm = (H < 12 || H === 24) ? " AM" : " PM";
  timeString = h + timeString.substr(2, 3) + ampm;
  return timeString
}

const eventCard=(props)=> {
  if(Object.keys(props).length>0){
  return (
    <Card className="root" variant="outlined">
      <CardContent>
        <Typography className="event-card-title" color="textSecondary" gutterBottom>
        <h3><MusicNoteTwoToneIcon/>{props.event["venue"]["name"]}</h3>  
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
         <EventTwoToneIcon/> {props.event["datetime"].split("T")[0]+" at "+timeFormat(props.event["datetime"].split("T")[1])}
        </Typography>
       
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );}
  else{
    return(
      <div>
       <h3>No Events Found</h3> 
      </div>
    )
  }
}
export default eventCard;
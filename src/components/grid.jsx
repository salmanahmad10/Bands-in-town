import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../styles/grid.scss'
import EventCard from './eventCard';

const CenteredGrid=(props)=>{
    console.log("prooops",props)
    if(props.eventData.length>0){    
    return (
            <div className="root">
                <Grid  container spacing={3}>
                {props.eventData.map((event,index)=>(
                <Grid key={index} item md={4} xs={12} >
                    <Paper className="paper"><EventCard event={event} ></EventCard></Paper>
                </Grid>
                 ))}
                </Grid>
           
            </div>
        );}
        else{
            console.log(props.length)
            return (
                <div>
                   
                </div>
            )
        }
}
export default CenteredGrid;
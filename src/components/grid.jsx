import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../styles/grid.scss'
import EventCard from './eventCard';

const CenteredGrid=(props)=>{  
    return (
            <div className="root">
            
                <Grid  container spacing={3}>
                {props.eventData[0].map((event,index)=>(
                <Grid key={index} item md={4} xs={12} >
                    <Paper className="paper"><EventCard event={event} ></EventCard></Paper>
                </Grid>
                 ))}
                </Grid>
           
            </div>
        );
}
export default CenteredGrid;
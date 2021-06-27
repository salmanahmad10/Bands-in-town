import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../styles/grid.scss'
import EventCard from './eventCard';

const CenteredGrid=()=>{
  return (
    <div className="root">
      <Grid container spacing={3}>
        <Grid item md={4} xs={12} >
          <Paper className="paper"><EventCard></EventCard></Paper>
        </Grid>
        <Grid item md={4} xs={12} >
          <Paper className="paper"><EventCard></EventCard></Paper>
        </Grid>
        <Grid item md={4} xs={12} >
          <Paper className="paper"><EventCard></EventCard></Paper>
        </Grid>
        <Grid item md={4} xs={12} >
          <Paper className="paper"><EventCard></EventCard></Paper>
        </Grid>
        <Grid item md={4} xs={12} >
          <Paper className="paper"><EventCard></EventCard></Paper>
        </Grid>
        <Grid item md={4} xs={12} >
          <Paper className="paper"><EventCard></EventCard></Paper>
        </Grid>
        <Grid item md={4} xs={12} >
          <Paper className="paper"><EventCard></EventCard></Paper>
        </Grid>
        <Grid item md={4} xs={12} >
          <Paper className="paper"><EventCard></EventCard></Paper>
        </Grid>
        <Grid item md={4} xs={12} >
          <Paper className="paper"><EventCard></EventCard></Paper>
        </Grid>
        
        
      </Grid>
    </div>
  );
}
export default CenteredGrid;
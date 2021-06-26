import React from 'react';
import '../styles/search.scss';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const search = props => {

    return (
        <div className="container flex-column">
        <div>
        <h1 className="title">BANDS IN TOWN</h1>
        </div>
       <div className="w-100">
          <form  noValidate autoComplete="off">
    
          <TextField id="filled-basic" className="search" label="Search" variant="filled" />
          </form>
          <div id="search-options">
          <Button
          variant="contained"
          endIcon={<SearchIcon/>}
          className="submit"
        >
          Search
        </Button>
      </div>
        </div>
       
       
        
    </div>
    );
};



export default search;
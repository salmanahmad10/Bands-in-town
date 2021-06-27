import React,{useState} from 'react';
import '../styles/search.scss';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import card from './cards';
import arrays from '../variables/arrayData';

const Search = props => {
  const [artist,setArtist]=useState("");

  const getFeildValue=function(e) {
    setArtist(e.target.value)
    console.log("artist",artist)
  }

  const fetchArtists=async(artist)=>{
    const URL="https://rest.bandsintown.com/artists/";
    const para=props.artistData;
    const cURL=URL+para;
    const data=await axios.get(
        cURL,{
            params:{
                app_id:"0ab49580-c84f-44d4-875f-d83760ea2cfe"
            }
        }
    );
    arrays.artistData=data["data"]["data"]
    console.log(arrays.artistData)
  }


  
    return (
      <div>
        <div className="container flex-column">
        <div>
        <h1 className="title">BANDS IN TOWN</h1>
        </div>
       <div className="w-100">
          <form  noValidate autoComplete="off">
    
          <TextField onKeyDown={getFeildValue} id="filled-basic" className="search" label="Search" variant="filled" />
          </form>
          <div id="search-options">
          <Button
          onClick={fetchArtists(artist)}
          variant="contained"
          endIcon={<SearchIcon/>}
          className="submit"
        > 
          Search
        </Button>

      </div>
        </div>
       
       
        
    </div>
    
    </div>
    );
};



export default Search;
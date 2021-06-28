import '../styles/search.scss';
import React,{useState,createContext} from 'react';

import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import arrays from '../variables/arrayData';
import Card from './cards';
import Grid from './grid';

const Search=(props)=>{
    const cache = {};

    const [fetched,setFetched]=useState(false);
    const [artistData,setArtistData]=useState([]);
    const [artistName,setArtistName]=useState([]);
    const [errorMessage,setErrorMessage]=useState()
    
    const URL="https://rest.bandsintown.com/artists/";
    const cURL=URL+artistName;
    const fetchArtists=async()=>{
        if (localStorage.getItem(cURL) !== null) {
            const localStorageArtistData=JSON.parse(localStorage.getItem(cURL))
            setArtistData(localStorageArtistData)
            setFetched(true)
            fetchEvents()
        }
        else{
            
            await axios.get(cURL,{
                params:{
                    app_id:"0ab49580-c84f-44d4-875f-d83760ea2cfe"
                }         
            })
            .then((response) => {
                if(response["data"]["error"] || response["data"]==""){
                    setErrorMessage("Results not found");
                    setFetched(false)
                    console.log("no data found")
                }
                else{
                    localStorage.setItem(cURL,JSON.stringify(response["data"]))
                    setArtistData(response["data"])
                    setFetched(true)
                    fetchEvents()
                }
                console.log(response)
                });
            }
        }

      const fetchEvents=async()=>{
        const URL="https://rest.bandsintown.com/artists/";
        const cURL=URL+artistName+"/events";
        if (localStorage.getItem(cURL) !== null) {
            const localStorageEventsData=JSON.parse(localStorage.getItem(cURL))
            props.parentCallback([localStorageEventsData])
            console.log(localStorageEventsData)
            setFetched(true)
        }
        else{
        await axios.get(cURL,{
            params:{     
                app_id:"0ab49580-c84f-44d4-875f-d83760ea2cfe"
            }         
        })
        .then((response) => {
            if(!response){
                props.parentCallback("no data")
                setFetched(false)
            }
            else{
                setFetched(true)
                props.parentCallback([response["data"]])
                localStorage.setItem(cURL,JSON.stringify(response["data"]))
            }
            
        });
      }
    }
     
    const handleChange=(e)=>{
        setArtistName(e.target.value)
    }
    

    return (
        <div className="container flex-column">
        <div>
        <h1 className="title">BANDS IN TOWN</h1>
        </div>
       <div className="w-100">
          <form  noValidate autoComplete="off">
    
          <TextField  id="filled-basic" className="search" label="Search" variant="filled" onChange={handleChange} />
          </form>
          <div id="search-options">
          <Button
          onClick={fetchArtists}
          variant="contained"
          endIcon={<SearchIcon/>}
          className="submit"
        > 
          Search
        </Button>
        
      </div>
        </div>
        <div className="content">
            {fetched==true?
            <a href="#events"> 
            <Card artist_name={artistData.name} 
            facebook_url={artistData.facebook_page_url} 
            image={artistData.image_url}>
            </Card>
            </a>
            :
            <h1>{errorMessage}</h1>}
        </div>            
        
    </div>
    );

}
export default Search
import '../styles/search.scss';
import React,{useState,createContext} from 'react';

import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Card from './cards';
import Grid from './grid';
const {REACT_APP_API_ID}=process.env
const Search=(props)=>{
    const cache = {};

    const [fetched,setFetched]=useState(false);
    const [artistData,setArtistData]=useState([]);
    const [artistName,setArtistName]=useState([]);
    const [errorMessage,setErrorMessage]=useState()
    
    const URL="https://rest.bandsintown.com/artists/";
    const cURL=URL+artistName;
    console.log(localStorage)

    const deleteOldestCachedData=(oldestDeltedCount)=>{
        var entries = [];
        for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var entryStr = localStorage.getItem(key);
        var entry = JSON.parse(entryStr);
        entries.push({ key: key, timestamp: entry.timestamp });
        }
        // Sort newest first (we want to keep the first newest)  
        entries.sort((entry1, entry2) => {
        return entry1.timestamp < entry2.timestamp;
        });
        console.log(entries)
        for (var i = 0; i < oldestDeltedCount; i++) {
            window.localStorage.removeItem(entries[i].key);
        }
    }

    const fetchArtists=async()=>{
        if (localStorage.getItem(cURL) !== null) {
            const localStorageArtistData=JSON.parse(localStorage.getItem(cURL))
            console.log(localStorageArtistData["data"])
            setArtistData(localStorageArtistData["data"])
            setFetched(true)
            fetchEvents()
        }
        else{
            
            await axios.get(cURL,{
                params:{
                    app_id:REACT_APP_API_ID,
                }         
            })
            .then((response) => {
                if(response["data"]["error"] || response["data"]==""){
                    setErrorMessage("Results not found");
                    props.parentCallback([])//sending app.js an empty array==>no events found
                    setFetched(false)
                }
                else{
                    if(localStorage.length>=30){
                        deleteOldestCachedData(2)
                    }
                    localStorage.setItem(cURL,JSON.stringify({
                        data:response["data"],
                        timestamp:Date.now()
                        
                    }))
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
            props.parentCallback([localStorageEventsData["data"]])
            console.log(localStorageEventsData["data"])
            setFetched(true)
        }
        else{
        await axios.get(cURL,{
            params:{     
                app_id:process.env.REACT_APP_API_ID,
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
                localStorage.setItem(cURL,JSON.stringify({
                    data:response["data"],
                    timestamp:Date.now()
                    
                }))
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
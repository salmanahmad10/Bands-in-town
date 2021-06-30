import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import BandCard from './Bandcard';
import axios from 'axios';

import '../styles/search.scss';
import { FormatTextdirectionRToLSharp } from '@material-ui/icons';
const { REACT_APP_API_ID } = process.env



const Main = (props) => {

    const [fetched, setFetched] = useState(false);
    const [artistData, setArtistData] = useState([]);
    const [artistName, setArtistName] = useState([]);
    const [errorMessage, setErrorMessage] = useState()
    const localStorangeMaxLimit = 30
    const URL = "https://rest.bandsintown.com/artists/";
    const cURL = URL + artistName;


/*
    fetchArttists api fetch the artists that matches user input.
    it first checks local storage, if data in local storage doesnt 
    exist for that input, it calls the api.if api call is successfull
    fetchEvents is called which fetch all the events of that artist.

*/

    const fetchArtists = async () => {
        if (localStorage.getItem(cURL) !== null) {
            const localStorageArtistData = JSON.parse(localStorage.getItem(cURL))
            setArtistData(localStorageArtistData["data"])
            setFetched(true)
            fetchEvents()
        }
        else {
            await axios.get(cURL, {
                params: {
                    app_id: REACT_APP_API_ID,
                }
            })
                .then((response) => {
                    if (response["data"]["error"] || response["data"] == "") {
                        setErrorMessage("Results not found");
                        props.eventsDataCallback([])//sending app.js an empty array==>no events
                        setFetched(false)
                    }
                    else {
                        if (localStorage.length >= localStorangeMaxLimit) {
                            deleteOldestCachedData(2)
                        }
                        localStorage.setItem(cURL, JSON.stringify({
                            data: response["data"],
                            timestamp: Date.now()

                        }))
                        setArtistData(response["data"])
                        setFetched(true)
                        fetchEvents()

                    }
                });
        }
    }


    const fetchEvents = async () => {
        const URL = "https://rest.bandsintown.com/artists/";
        const cURL = URL + artistName + "/events";
        if (localStorage.getItem(cURL) !== null) {
            const localStorageEventsData = JSON.parse(localStorage.getItem(cURL))
            props.eventsDataCallback([localStorageEventsData["data"]])
            setFetched(true)
        }
        else {
            await axios.get(cURL, {
                params: {
                    app_id: process.env.REACT_APP_API_ID,
                }
            })
                .then((response) => {
                    if (!response) {
                        props.eventsDataCallback([])
                        setFetched(false)
                    }
                    else {
                        setFetched(true)
                        props.eventsDataCallback([response["data"]])
                        localStorage.setItem(cURL, JSON.stringify({
                            data: response["data"],
                            timestamp: Date.now()

                        }))
                    }

                });
        }
    }

    const handleChange = (e) => {
        setArtistName(e.target.value.replace(/ +/g, ""))
    }


    return (
        <div className="container flex-column">
            <div>
                <h1 className="title">BANDS IN TOWN</h1>
            </div>
            <div className="w-100">
                <form noValidate autoComplete="off" onSubmit={(e)=>
                    {
                        e.preventDefault();
                        fetchArtists()

                    }}>
                    <TextField autoFocus id="filled-basic" className="search" label="Search" variant="filled" onChange={handleChange} />
                </form>
                <div id="search-options">
                    <Button
                        onClick={fetchArtists}
                        variant="contained"
                        endIcon={<SearchIcon />}
                        className="submit"
                    >
                        Search
                    </Button>

                </div>
            </div>
            <div className="content">
                {fetched == true ?
                    <a href="#events">
                        <BandCard artist_name={artistData.name}
                            facebook_url={artistData.facebook_page_url}
                            image={artistData.image_url}>
                        </BandCard>
                    </a>
                    :
                    <h1>{errorMessage}</h1>}
            </div>

        </div>
    );

}
/*
    deleteOldestCachedData takes no of data entries
    to be deleted from  localstorage. this function
    is invoked when  when set applied limit of 
    local storage is surpassed.
*/
const deleteOldestCachedData = (oldestDeltedCount) => {
    var entries = [];
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var entryStr = localStorage.getItem(key);
        var entry = JSON.parse(entryStr);
        entries.push({ key: key, timestamp: entry.timestamp });
    }
    entries.sort((entry1, entry2) => {
        return entry1.timestamp < entry2.timestamp;
    });
    for (var j = 0; j < oldestDeltedCount; j++) {
        window.localStorage.removeItem(entries[j].key);
    }
}
export default Main
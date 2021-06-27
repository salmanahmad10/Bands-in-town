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

class search extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
            fetched:false,
            artistData:{},
            error_message:"",
            artistName:""
        }
    }
    fetchArtists=async()=>{
        const URL="https://rest.bandsintown.com/artists/";
        const cURL=URL+this.state.artistName;
        await axios.get(cURL,{
            params:{
                app_id:"0ab49580-c84f-44d4-875f-d83760ea2cfe"
            }         
        })
        .then((response) => {
            if(response["data"]["error"]){
                this.error_message="Results not found";
                this.setState({
                    fetched:false  
                })
            }
            else{
                this.artistData=response["data"]
                
                this.setState({
                    fetched:true
                })
                this.fetchEvents()
            }
            
            console.log(response)
        });
      }
    fetchEvents=async()=>{
    const URL="https://rest.bandsintown.com/artists/";
    const cURL=URL+this.state.artistName+"/events";
    await axios.get(cURL,{
        params:{     
            app_id:"0ab49580-c84f-44d4-875f-d83760ea2cfe"
        }         
    })
    .then((response) => {
        this.props.parentCallback([response["data"]])
    });
    }


    handleChange=(e)=>{
        this.setState({
            artistName:e.target.value
        })
    }
    handleClick=()=>{
        console.log(this.state.artistName)
    }
   

    render() {
        return (
            <div className="container flex-column">
            <div>
            <h1 className="title">BANDS IN TOWN</h1>
            </div>
           <div className="w-100">
              <form  noValidate autoComplete="off">
        
              <TextField  id="filled-basic" className="search" label="Search" variant="filled" onChange={this.handleChange} />
              </form>
              <div id="search-options">
              <Button
              onClick={this.fetchArtists}
              variant="contained"
              endIcon={<SearchIcon/>}
              className="submit"
            > 
              Search
            </Button>
            
          </div>
            </div>
            <div className="content">
                {this.state.fetched==true?
                <a href="#events"> 
                <Card artist_name={this.artistData.name} 
                facebook_url={this.artistData.facebook_page_url} 
                image={this.artistData.image_url}>
                </Card>
                </a>
                :
                <h1>{this.error_message}</h1>}
            </div>            
            
        </div>
        );
      
    }
  }
  export default search;
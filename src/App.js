import {lazy,Suspense, useEffect} from 'react'
import './App.scss';

import Grid from './components/grid';
import { useState } from 'react';
import Pagination from './components/pagination';
import Loading from './components/loading';
import SearchBar from './components/searchBar';
import { object } from 'prop-types';
const Search=lazy(()=>import('./components/search3'))

function App() {
  const [currentPage,setCurrentPage]=useState(1)
  const [eventsPerPage]=useState(6)
  const [eventsData, seteventsData]=useState([])
  const [searchTerm,setSearchTerm]=useState("")
  const [searchResults,setSearchResults]=useState([])
  let currentEvents=[]
  const indexOfLastPost=currentPage * eventsPerPage;
  const indexOfFirstPost=indexOfLastPost - eventsPerPage;
  if(eventsData[0]){
    currentEvents=eventsData[0].slice(indexOfFirstPost,indexOfLastPost)
  }
  const paginate=(pageNumber)=>setCurrentPage(pageNumber)
  const callbackFunction = async (childData) => {
    seteventsData(childData)
  }
  const searchBarHandler=(e)=>{
    setSearchTerm(e)
    console.log(eventsData[0])
    console.log(searchTerm)
    if(searchTerm!==""){
      const newEventList=eventsData[0].filter((event)=>{
        return new RegExp(searchTerm , 'i').test(Object.values(event)
        .join(" ")
        .toLowerCase())
      })
    
      setSearchResults(newEventList)
      console.log("new event list",newEventList)
      
    }
      else{
        setSearchResults(eventsData[0])
      }
      
  }

  return (
    <Suspense fallback={<Loading></Loading>}>
      <div className="App">
        <div className="container">
        <Search parentCallback={callbackFunction}></Search>
      </div>
      <div id="events">
       
      {eventsData.length>0?
        <div>
          <SearchBar handler={searchBarHandler}></SearchBar>
          {console.log(searchResults)}
          <Grid eventData={searchTerm.length>0?searchResults:currentEvents}></Grid>
          <Pagination eventsPerPage={eventsPerPage} totalEvents={eventsData[0].length} paginate={paginate}></Pagination>
        </div>:<Grid eventData={[]}></Grid>
         
         }
      </div>
    </div>
    </Suspense>
  );
}

export default App;

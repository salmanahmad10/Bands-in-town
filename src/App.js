import { useState } from 'react';
import {lazy,Suspense, useEffect} from 'react'
import Grid from './components/grid';
import Pagination from './components/pagination';
import Loading from './components/loading';
import SearchBar from './components/searchBar';
import './App.scss';
const Main =lazy(()=>import('./components/main'))

function App() {
  const [currentPage,setCurrentPage]=useState(1)
  const [eventsPerPage]=useState(6)
  const [eventsData, seteventsData]=useState([])
  const [searchTerm,setSearchTerm]=useState("")
  const [searchResults,setSearchResults]=useState([])
  let currentPageEvents=[]
  const indexOfLastPost=currentPage * eventsPerPage;
  const indexOfFirstPost=indexOfLastPost - eventsPerPage;
  /*sets the number of current event for one page*/
  if(eventsData[0]){
    currentPageEvents=eventsData[0].slice(indexOfFirstPost,indexOfLastPost)
  }
  const paginate=(pageNumber)=>setCurrentPage(pageNumber)
  const eventsDataCallback = async (eventsDataMain) => {
    seteventsData(eventsDataMain)
  }
  /*searchbarhandler filters the data on the basis of input from search input*/
  const searchBarHandler=(e)=>{
    setSearchTerm(e)
    if(searchTerm!==""){
      const newEventList=eventsData[0].filter((event)=>{
        console.log(eventsData[0])
        console.log(Object.values(event)
         .join(" ")
         .toLowerCase());
        return new RegExp(searchTerm , 'i').test(Object.values(event.venue)
        .join(" ")
        .toLowerCase());
         

      })
    
      setSearchResults(newEventList)      
    }
      else{
        setSearchResults(eventsData[0])
      }
      
  }

  return (
    <Suspense fallback={<Loading></Loading>}>
      <div className="App">
        <div className="container">
        <Main eventsDataCallback={eventsDataCallback}></Main>
      </div>
      <div id="events">
       
      {eventsData.length>0?
        <div>
          <SearchBar handler={searchBarHandler}></SearchBar>
          {console.log(searchResults)}
          <Grid eventData={searchTerm.length>0?searchResults:currentPageEvents}></Grid>
          <Pagination eventsPerPage={eventsPerPage} totalEvents={eventsData[0].length} paginate={paginate}></Pagination>
        </div>:<Grid eventData={[]}></Grid>
         }
      </div>
    </div>
    </Suspense>
  );
}

export default App;

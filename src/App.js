import './App.scss';
import Search from './components/search3';
import Card from './components/cards'
import EventCard from './components/eventCard';
import Grid from './components/grid';
import { useEffect } from 'react';
import { useState } from 'react';
import Pagination from './components/pagination';


function App() {
  const [currentPage,setCurrentPage]=useState(1)
  const [eventsPerPage,setEventsCurrentPage]=useState(6)
  const [eventsData, seteventsData]=useState([])
  let currentEvents=[]
  const indexOfLastPost=currentPage * eventsPerPage;
  const indexOfFirstPost=indexOfLastPost - eventsPerPage;
  if(eventsData[0]){
    currentEvents=eventsData[0].slice(indexOfFirstPost,indexOfLastPost)
  }
  const paginate=(pageNumber)=>setCurrentPage(pageNumber)
  const callbackFunction = async (childData) => {
    await seteventsData(childData)
  }
    
  return (
      <div className="App">
        <div className="container">
        <Search parentCallback={callbackFunction}></Search>
        {console.log("events data",eventsData[0])}
      </div>
      <div id="events">
      {eventsData.length>0?
        <Grid eventData={currentEvents}></Grid> :<Grid eventData={[]}></Grid>}
        {eventsData.length>0?
        <Pagination eventsPerPage={eventsPerPage} totalEvents={eventsData[0].length} paginate={paginate}></Pagination> :""}
        
      </div>
    </div>
  );
}

export default App;

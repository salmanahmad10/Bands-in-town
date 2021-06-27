import './App.scss';
import Search from './components/search2';
import Card from './components/cards'
import EventCard from './components/eventCard';
import Grid from './components/grid';
import { useEffect } from 'react';
import { useState } from 'react';



function App() {
  const [eventsData, seteventsData]=useState([])
  const callbackFunction = async (childData) => {
    await seteventsData(childData)
}

  return (
      <div className="App">
        <div className="container">
        <Search parentCallback={callbackFunction}></Search>
        {console.log("events data",eventsData)}
      </div>
      <div id="events">
      {eventsData.length>0?
        <Grid eventData={eventsData}></Grid> :"No events found"}
      </div>
    </div>
  );
}

export default App;

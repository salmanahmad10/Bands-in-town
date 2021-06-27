import './App.scss';
import Search from './components/search2';
import Card from './components/cards'
import EventCard from './components/eventCard';
import Grid from './components/grid';

function App() {
  return (
      <div className="App">
        <div className="container">
        <Search></Search>
      </div>
      <div id="events">
      <Grid></Grid>
      </div>
    </div>
  );
}

export default App;

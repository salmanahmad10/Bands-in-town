import './App.css';
import Search from './components/search';
import Card from './components/cards'
import FetchEvents from './components/fetchEvents';
function App() {
  return (
      <div className="App">
        <div className="container">
        <Search></Search>
      </div>
      <Card></Card>
      <FetchEvents></FetchEvents>

    </div>
  );
}

export default App;

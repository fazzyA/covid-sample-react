import {Button, Card} from '@material-ui/core';
import Api from './components/Api';
import MediaCard from './components/MediaCard';
import Cards from './components/MediaCard';
function App() {
  return (
    <div className="App">
      <button>click</button>
      <Button variant="contained" color="secondary">Covid</Button>
      <Api />
    </div>
  );
}

export default App;

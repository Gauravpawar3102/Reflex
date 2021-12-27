import './App.css';
import Row from './Row.jsx';
import requests from './requests';
function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;

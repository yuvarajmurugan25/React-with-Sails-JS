import './assests/css/index.css';
import SearchBar from './components/searchBar';

function App() {
  return (
    <div className="app">
      <header className="app-header">
          <SearchBar></SearchBar>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import PictureLink from './PictureLink';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" className="App-logo" alt="logo" />
        <PictureLink/>
        <a className="App-link" href="."><h6>Load another picture</h6></a>
      </header>
    </div>
  );
}

export default App;

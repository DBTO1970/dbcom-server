import logo from './assistant.png';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{paddingBottom: '50px', marginBottom: '25px'}} className="App-logo" alt="logo" />
        <p>
          This is a server for <a href="https://donbarto.com">donbarto.com</a>
        </p>
        <a
          className="App-link"
          href="https://donbarto.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Main Site
        </a>
      </header>
      
    </div>
  );
}

export default App;

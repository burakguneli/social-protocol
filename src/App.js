import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const handleGetUsers = async () => {
    const response = await fetch('http://localhost:3001/users')

    console.log(response)
  }

  const handleCreateUser = async () => {
    axios.post('http://localhost:3001/users', {
      firstName: "Burak",
      lastName: "Güneli",
      email: "burak.guneli@gmail.com",
      socialProtocolPreference: "samimi"
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={handleGetUsers}>
          Get Users
        </button>

        <button onClick={handleCreateUser}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;

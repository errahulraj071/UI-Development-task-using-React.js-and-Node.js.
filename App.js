import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [serverInfo, setServerInfo] = useState(null);

  useEffect(() => {
    // Fetch server info from the backend
    axios.get('http://localhost:5000/api/server-info')
      .then(response => {
        setServerInfo(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the server data!', error);
      });
  }, []);

  if (!serverInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="server-info-container">
      <h1>{serverInfo.name}</h1>
      <div className="server-details">
        <p><strong>Map:</strong> {serverInfo.map}</p>
        <p><strong>Players:</strong> {serverInfo.playerCount}/64</p>
        <p><strong>Ping:</strong> {serverInfo.ping} ms</p>
        <p><strong>Game Mode:</strong> {serverInfo.gameMode}</p>
        <p><strong>Status:</strong> {serverInfo.status}</p>
      </div>
    </div>
  );
}

export default App;

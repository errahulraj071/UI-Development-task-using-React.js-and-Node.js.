const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

// Mock API for server info
app.get('/api/server-info', (req, res) => {
  const serverInfo = {
    name: 'Battlefield 4 Server',
    map: 'Siege of Shanghai',
    playerCount: 64,
    ping: 50,
    gameMode: 'Conquest',
    status: 'Online',
  };
  res.json(serverInfo);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

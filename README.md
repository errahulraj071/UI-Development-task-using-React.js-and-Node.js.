# UI-Development-task-using-React.js-and-Node.js.
# Battlefield Server Info

A project that provides a backend API and a frontend React application to display server information for a Battlefield game server. This guide explains the setup process and the file structure.

## Prerequisites

- Node.js and npm installed on your machine.

## Setup Instructions

### Step 1: Initialize the Backend

```bash
# Create a directory for the project
mkdir battlefield-server-info
cd battlefield-server-info

# Initialize a Node.js project
npm init -y

# Install dependencies
npm install express axios cors
```

### Step 2: Create the Backend Server

Create a file named `server.js` and add the following code:

```javascript
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Sample endpoint to fetch server info
app.get('/api/server-info', async (req, res) => {
  try {
    // Replace with actual API to fetch server info
    const response = await axios.get('https://api.example.com/server-info');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching server info');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

Run the backend server:

```bash
node server.js
```

### Step 3: Initialize the Frontend

```bash
# Create a React app
npx create-react-app client
cd client

# Install Axios for API requests
npm install axios
```

### Step 4: Create Frontend Components

#### 1. `ServerInfo.js`

Create a file in `src/pages/ServerInfo.js` with the following content:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServerInfo = () => {
  const [serverInfo, setServerInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/server-info');
        setServerInfo(response.data);
      } catch (error) {
        console.error('Error fetching server info', error);
      }
    };

    fetchData();
  }, []);

  if (!serverInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{serverInfo.name}</h1>
      <p>{serverInfo.description}</p>
      {/* Render other server info here */}
    </div>
  );
};

export default ServerInfo;
```

#### 2. `App.js`

Update the `src/App.js` file with the following:

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServerInfo from './pages/ServerInfo';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/server-info" component={ServerInfo} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
};

export default App;
```

### Step 5: Run the Frontend

```bash
cd client
npm start
```

The application will run on `http://localhost:3000`. Navigate to `/server-info` to see the server information.

## File Structure

```
Battlefield-Server-Info/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   └── ServerInfo.js
│   │   ├── App.js
│   │   └── index.js
├── server.js
├── package.json
└── README.md
```

## Additional Notes

- Replace `https://api.example.com/server-info` with the actual API endpoint to fetch server information.
- Ensure both backend and frontend servers are running for the application to function properly.

## Future Enhancements

- Add authentication for API access.
- Improve the frontend design.
- Include additional server details in the UI.

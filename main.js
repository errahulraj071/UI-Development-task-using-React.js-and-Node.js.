const [expanded, setExpanded] = useState(false);

const handleToggle = () => {
  setExpanded(!expanded);
};

return (
  <div className="server-info-container" onClick={handleToggle}>
    <h1>{serverInfo.name}</h1>
    {expanded && (
      <div className="server-details">
        <p><strong>Map:</strong> {serverInfo.map}</p>
        <p><strong>Players:</strong> {serverInfo.playerCount}/64</p>
        <p><strong>Ping:</strong> {serverInfo.ping} ms</p>
        <p><strong>Game Mode:</strong> {serverInfo.gameMode}</p>
        <p><strong>Status:</strong> {serverInfo.status}</p>
      </div>
    )}
  </div>
);


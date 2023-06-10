import { useState } from 'react';
import { sendRequest } from './api';

function App() {
  const [requestData, setRequestData] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSendRequest = async () => {
    try {
      const responseData = await sendRequest(requestData);
      setResponse(responseData);
      setError(null);
    } catch (error) {
      setResponse(null);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>API Example</h1>
      <textarea
        rows={5}
        cols={50}
        value={requestData}
        onChange={(e) => setRequestData(e.target.value)}
      />
      <button onClick={handleSendRequest}>Send Request</button>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;

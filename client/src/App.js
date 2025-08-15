import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => setMessage('Error connecting to backend'));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;

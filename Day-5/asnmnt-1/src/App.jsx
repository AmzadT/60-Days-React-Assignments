import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {

    };
  }, []); 

  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log('Mouse position:', event.clientX, event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); 

  useEffect(() => {
    const updateDocumentTitle = () => {
      document.title = 'New Title'; 
    };

    updateDocumentTitle();

    return () => {
    };
  }, []); 

  return (
    <div className="App">
      <h2>Fetched Data</h2>
      <div className="data-container">
        {data && data.map(item => (
          <div key={item.id} className="data-item">
            <img style={{ width: '200px', height: '200px' }} src={`https://via.placeholder.com/400`} alt={item.title} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <h2>Subscribing to External Events</h2>
      <button onClick={() => alert('Button clicked!')}>Click me!</button>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Slider from './components/Slider';
import { fetchData } from './api/api';
import './App.css';
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData().then((result) => {
      setUsers(result.data);
    });
  }, []);
  return (
    <div className="App">
      <header>
        <h1>header tag</h1>
      </header>
      <section className="hero">
        <Slider users={users} />
      </section>
    </div>
  );
}

export default App;

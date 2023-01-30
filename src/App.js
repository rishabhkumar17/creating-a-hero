import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superPower, setSuperPower] = useState('');

  return (
    <div className="App">
      <h1>Build A Hero</h1>
      <label>Name: </label>
      <input
        type="text"
        style={{ margin: 10 }}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Age: </label>
      <input
        type="number"
        style={{ margin: 10 }}
        onChange={(e) => setAge(e.target.value)}
      />
      <label>Height: </label>
      <input
        type="number"
        style={{ margin: 10 }}
        onChange={(e) => setHeight(e.target.value)}
      />
      <label>SuperPower: </label>
      <input
        type="text"
        style={{ margin: 10 }}
        onChange={(e) => setSuperPower(e.target.value)}
      />
      {name}
      {age}
      {height}
      {superPower}
    </div>
  );
}

export default App;

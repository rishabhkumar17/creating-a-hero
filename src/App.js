import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('David');

  const changeName = () => {
    setName('John');
  };
  return (
    <div className="App">
      <h1>Build A Hero</h1>
      <label>Name: </label>
      <input type="text" style={{ margin: 10 }} />
      <label>Age: </label>
      <input type="number" style={{ margin: 10 }} />
      <label>Height: </label>
      <input type="text" style={{ margin: 10 }} />
      <label>SuperPower: </label>
      <input type="text" style={{ margin: 10 }} />

      <button onClick={changeName}>Change Name</button>
      {name}
    </div>
  );
}

export default App;

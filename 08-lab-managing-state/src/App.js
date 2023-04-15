import { useState } from 'react';
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";

function App() {

  const [fruits] = useState(['apple', 'banana', 'orange']);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
};

export default App;
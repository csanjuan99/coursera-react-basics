import Bag from "./components/Bag";
import Apple from "./components/Apple";
import Pear from "./components/Pear";

function App() {
  return (
    <div className="App">
      <Bag>
        <Apple number={5} />
        <Pear name="John" />
      </Bag>
    </div>
  );
}

export default App;

import Bag from "./components/Bag";
import Apple from "./components/Apple";
import Pear from "./components/Pear";

function App() {
  return (
    <div className="App">
      <span>One component one line</span>
      <Bag children={<Apple number={5} />} />
      <span>Many components open end tag</span>
      <Bag>
        <Apple number={5} />
        <Pear name="John" />
      </Bag>
    </div>
  );
}

export default App;

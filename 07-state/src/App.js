import { useState } from "react";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";
import MealsProvider from "./providers/MealsProvider";
// import InputComponent from "./components/InputComponent";
// import RegisterForm from "./components/RegisterForm";

function App() {
  // Create a state variable called count, and a function to update it
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <h1>React 18</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr></hr>
      <InputComponent />
      <hr></hr>
      <RegisterForm /> */}
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default App;

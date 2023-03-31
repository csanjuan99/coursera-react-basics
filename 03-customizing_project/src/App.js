import './App.css';
import Nav from './components/Nav';
import Promo from './components/Promo';
import Footer from './components/Footer';
import { Intro1, Intro2, Intro3 } from './components/Intro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <main>
        <Promo/>
        <section>
          <Intro1/>
          <Intro2/>
          <Intro3/>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

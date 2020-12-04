// CSS //
import './App.css';

// COMPONENTS //
import NavBar from './components/NavBar'
import Header from './components/Header'
import News from './components/News'
import Tournaments from './components/Tournaments'
import RankDeck from './components/RankDeck'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <News />
      <Tournaments />
      <RankDeck />
      <Footer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Posts from './components/Posts'

function App() {
  return (
    <div className="App">
      <Header />
      <main>

        <Main />

      </main>
      <Footer />
    </div>
  );
}

export default App;
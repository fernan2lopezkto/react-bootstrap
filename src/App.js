import './App.css';
import Header from './Componentes/Header';
import NavBar from './Componentes/NavBar';
import VideoPlayer from './Componentes/vid';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <VideoPlayer />
    </div>
  );
}

export default App;

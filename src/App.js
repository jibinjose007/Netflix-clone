import './App.css';
import NavBar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import RowPost from './components/rowpost/RowPost';


function App() {
        
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost/>
      <RowPost/>
      <RowPost/>
    </div>
  );
}

export default App;

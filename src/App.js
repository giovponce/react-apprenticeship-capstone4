import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Footer from './Components/Footer';

function App() {
  
  const getSearchResult = (newSearch) => {
    console.log(newSearch);
  }

  return (
    <Router>
      <Header getSearchResult={getSearchResult}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

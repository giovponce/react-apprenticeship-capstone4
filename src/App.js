import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Footer from './Components/Footer';
import ProductList from './Pages/ProductList';

function App() {
  
  const getSearchResult = (newSearch) => {
    console.log(newSearch);
  }

  return (
    <BrowserRouter>
      <Header getSearchResult={getSearchResult}/>
      <Routes>
        {["/home", "/"].map((path, index) => 
        <Route path={path} element={<Home/>} key={index} />
        )}
        <Route path='/all' element={<ProductList/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

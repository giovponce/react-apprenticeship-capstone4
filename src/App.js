import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);
  
  const getSearchResult = (newSearch) => {
    console.log(newSearch);
  }

  return (
    <Router>
      <Header getSearchResult={getSearchResult}/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;

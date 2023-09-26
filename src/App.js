
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Content } from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import  Navbar  from './Components/Navbar/Navbar';
import { Topbar } from './Components/Topbar/Topbar';
import Mencollection from './Components/MenCollection/Mencollection';
import WomenCollection from './Components/WomenCollection/WomenCollection';
import Footwear from './Components/Footwear/Footwear';
import Bags from './Components/Bags/Bags';
import SpecialCollection from './Components/SpecialCollections/SpecialCollection';
import Cart from './Components/Cart.jsx/Cart';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/men' element={<Mencollection/>}/>
        <Route path='/men' element={<Mencollection/>}/>
        <Route path='/women' element={<WomenCollection/>}/>
        <Route path='/footwear' element={<Footwear/>}/>
        <Route path='/bags' element={<Bags/>}/>
        <Route path='/collection' element={<SpecialCollection/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      <Footer/>
      
    </div>
  );
}

export default App;

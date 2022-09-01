import './App.css';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import { Routes, Route } from "react-router-dom";
import Cart from './Cart/Cart';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Banner />} />
    
      
        <Route path="/cart" element={<Cart />} />
      </Routes>
   
     
   

    </div>
  );
}

export default App;

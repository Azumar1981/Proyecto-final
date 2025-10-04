import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage/HomePage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductForm from './pages/ProductForm/ProductForm';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import OffersDisplay from './components/OffersDisplay/OffersDisplay';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
       <Navbar/>

         <Routes>
           <Route path='/' element={<HomePage/>} />
           <Route path='ProductDetail' element={<ProductDetail/>} />
           <Route path='ProductForm' element={<ProductForm/>} />
           <Route path='OffersDisplay' element={<OffersDisplay/>} />
         </Routes>
         <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

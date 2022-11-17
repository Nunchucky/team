import './App.css';
import { Home } from '/Users/22HOP2D-Chintushig/Desktop/code/projects/team/my-first-app/src/component/home.js';
import { BrowserRouter, Routes, Route, Navigate, DefaultRoute } from 'react-router-dom'
import { Products } from './component/products';
import { Contact } from './component/contact';
import { Services } from './component/services';

function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/home' index element={<Home/>}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/services' element={<Services />}/>
    </Routes>
  <br></br>
  <br></br>
  <br></br>
  </BrowserRouter>
  </>
  );
}
export default App;

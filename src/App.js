import './App.css';
import { Home } from '/Users/22HOP2D-Chintushig/Desktop/code/projects/team/my-first-app/src/component/home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Products } from './component/products';
import { Contact } from './component/contact';
import { Services } from './component/services';
import { SecondPage } from './component/SecondPage';

function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Home />}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/services' element={<Services />}/>
    </Routes>
  </BrowserRouter>
  <br></br>
  <br></br>
  <br></br>
  <SecondPage />
  </>
  );
}
export default App;

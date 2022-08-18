import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Layout from './layout/Layout';
import CardsPersonajes from './pages/CardsPersonajes';
import CardsNaves from './pages/CardsNaves';
import Favoritos from './pages/Favoritos';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<CardsPersonajes/>}/>
            <Route path='cardsNaves' element={<CardsNaves/>}/>
            <Route path='favoritos' element={<Favoritos/>}/>
          </Route>
        </Routes>
      
      </BrowserRouter>
  )
}

export default App

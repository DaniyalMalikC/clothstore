import React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';

// Screens

import Err404 from '../screens/Err404';
import Studio from '../screens/Studio';
import Home from '../screens/Home';
import Product from '../screens/Product';

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route element={<Err404 />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;

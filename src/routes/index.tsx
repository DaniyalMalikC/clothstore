import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

// Screens

import Err404 from '../screens/Err404';
import Studio from '../screens/Studio';
import Home from '../screens/Home';
import Product from '../screens/Product';

function Router() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Studio />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Product" element={<Product />} />
      <Route element={<Err404 />} />
    </BrowserRouter>
  );
}

export default Router;

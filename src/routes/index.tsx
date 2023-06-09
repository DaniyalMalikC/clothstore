import React from 'react';

import {
  BrowserRouter, HashRouter, Outlet, Route, Routes,
} from 'react-router-dom';

// Screens

import Err404 from '../screens/Err404';
import Studio from '../screens/Studio';
import Tryout from '../screens/Tryout';
import Home from '../screens/Home';
import Product from '../screens/Product';
import { Header } from '../components/Parts';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clothstore" element={<Header />}>
          <Route index element={<Studio />} />
          <Route path="Tryout" element={<Tryout />} />
          <Route path="Product" element={<Product />} />
          <Route path="*" element={<Err404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import HotelListing from './pages/HotelListing';
import HotelDetail from './pages/HotelDetail';
import Checkout from './pages/Checkout';
import BookingConfirmation from './pages/BookingConfirmation';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="hotels" element={<HotelListing />} />
        <Route path="hotels/:id" element={<HotelDetail />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="confirmation" element={<BookingConfirmation />} />
        <Route path="account" element={<Account />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
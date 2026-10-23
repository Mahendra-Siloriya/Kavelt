
import { useState, useCallback } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import OrderModal from './components/OrderModal';
import Home from './pages/Home';

import './styles/main.css';

function App() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const openOrder = useCallback(() => setIsOrderOpen(true), []);
  const closeOrder = useCallback(() => setIsOrderOpen(false), []);

  return (
    <>
      <Navbar onOrderClick={openOrder} />
      <Home onEnquireClick={openOrder} />
      <Marquee />
      <Footer />

      <OrderModal
        isOpen={isOrderOpen}
        onClose={closeOrder}
      />
    </>
  );
}

export default App;

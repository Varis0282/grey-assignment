import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import { PrivateRoute } from './components/PrivateRoute';

const App = () => (
  <CartProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/product/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
      </Routes>
    </Router>
  </CartProvider>
);
export default App;

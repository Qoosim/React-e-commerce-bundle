import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CustomersList from './components/CustomersList/CustomersList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Form from './components/Form/Form';
import Dashboard from './components/Dashboard/Dashboard';
import Page404 from './components/404/404';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/customers" element={<CustomersList />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

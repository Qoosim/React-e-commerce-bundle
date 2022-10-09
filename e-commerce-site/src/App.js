import './App.css';
import Navbar from './components/Navbar/Navbar';
// import CustomersList from './components/CustomersList/CustomersList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ShoppingCart />
    </div>
  );
}

export default App;

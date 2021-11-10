
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import AddProduct from './Pages/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/product-details/:id">
            <ProductDetails />
          </Route>
          <Route path="/add-product">
            <AddProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageProducts from './Pages/ManageProducts/ManageProducts';

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
          <Route path="/products/:_id">
            <ProductDetails />
          </Route>
          <Route path="/add-product">
            <AddProduct />
          </Route>
          <Route path="/manage-products">
            <ManageProducts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

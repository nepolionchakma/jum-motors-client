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
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Menu from './Shared/Menu/Menu';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import AllProducts from './Pages/AllProducts/AllProducts';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import AllOrders from './Pages/DashBoard/AllOrders/AllOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/order">
              <AllOrders></AllOrders>
            </Route>
            <Route path="/products/:_id">
              <ProductDetails />
            </Route>
            <Route path="/cars">
              <AllProducts />
            </Route>
            <Route path="/place-order">
              <PlaceOrder />
            </Route>
            <Route path="/add-product">
              <AddProduct />
            </Route>
            <PrivateRoute path="/manage-products">
              <ManageProducts />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard />
            </PrivateRoute>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

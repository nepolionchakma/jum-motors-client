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
import ContactUs from '../src/Pages/ContactUs/ContactUs';
import Error from '../src/Pages/Error/Error';

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
            <PrivateRoute path="/products/:_id">
              <ProductDetails />
            </PrivateRoute>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/cars">
              <AllProducts />
            </Route>
            <PrivateRoute path="/add-product">
              <AddProduct />
            </PrivateRoute>
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
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

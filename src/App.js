import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import Footer from "./components/layout/Footer";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Login from "./components/login/Login";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmorder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderdetails.scss";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/confirmOrder' element={<ConfirmOrder />} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        <Route path='/login' element={<Login />} />
        <Route path='/me' element={<Profile />} />
        <Route path='/myOrders' element={<MyOrders />} />
        <Route path='/order/:id' element={<OrderDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

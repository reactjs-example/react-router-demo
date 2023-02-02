import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { PageNotFound } from "./components/PageNotFound";
import { Products } from "./components/Products";
import { Featured } from "./components/Featured";
import { NewArrival } from "./components/NewArrival";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/order-summary" element={<OrderSummary />}></Route>
        <Route path="users" element={<Users/>}>
          <Route path=":id" element={<UserDetails/>}></Route>
        </Route>
        <Route path="/products" element={<Products />}>
          <Route index element={<Featured/>}></Route>
          <Route path="featured" element={<Featured />}></Route>
          <Route path="new" element={<NewArrival />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

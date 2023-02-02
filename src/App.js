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
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/order-summary" element={<OrderSummary />}></Route>
        <Route path="/products" element={<Products />}>
          <Route path="featured" element={<Featured />}></Route>
          <Route path="new" element={<NewArrival />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

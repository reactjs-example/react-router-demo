import { useState } from "react";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

const Home2 = () => {
  let [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <>
      <h2>Home 2</h2>
      {
        // navigating conditionally
        count === 3 && (
          <p>
            <Navigate to="../home" />
          </p>
        )
      }

      <button onClick={increaseCount}>Navigate</button>
      <BookStore />
    </>
  );
};

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="home2">Home 2</Link>
        </li>
      </ul>
    </>
  );
};

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="home2" element={<Home2 />} />
        <Route path="books" element={<Books />} />
      </Routes>
    </>
  );
};

const BookStore = () => {
  const navigate = useNavigate();
  const bookHandler = () => { // navigate with useNavigate hook
    navigate("/books", { replace: true, state: { bookName: "ABC" } });
  };

  return (
    <>
      <button onClick={bookHandler}>View Book</button>
    </>
  );
};

const Books = ({  }) => { // consume state data from hook
  const location = useLocation();
  const bookName = location?.state?.bookName || "Default Title";
  return (
    <>
      <h4>Here is book: {bookName}</h4>
    </>
  );
};
export { PageRoutes, Nav };

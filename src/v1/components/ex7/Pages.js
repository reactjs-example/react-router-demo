import { Link, Outlet, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

const Author = () => {
  return (
    <>
      <h1>Author</h1>
      <Outlet />
    </>
  );
};

const AuthorRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Author />}>
          <Route path="books" element={<Books />} />
        </Route>
      </Routes>
    </>
  );
};

const Books = () => {
  return (
    <>
      <h1>Books</h1>
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
          <Link to="author">Author</Link>
        </li>
        <li>
          <Link to="author/books">Author/Books</Link>
        </li>
      </ul>
    </>
  );
};

export { Home, Author, AuthorRoutes, Books, Nav };

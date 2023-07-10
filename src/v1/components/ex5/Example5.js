import { Link, Route, Router, Routes } from "react-router-dom";
import { About, Home, Settings } from "./Pages";

export const Example5 = () => {
  let styles = { fontSize: "20px", color: "red" };
  let content = `Routlet Context Example`;
  return (
    <>
      <h1 style={styles}>{content}</h1>

      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="about/settings">About | Settings</Link>
        </li>
      </ul>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
};

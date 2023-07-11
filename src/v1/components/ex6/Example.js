import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, Nav } from "./Pages";

export const Example6 = () => {
  let content = `multiple routes`;
  let styles = { fontSize: "20px", color: "red" };

  return (
    <>
      <h1 style={styles}>{content}</h1>

      <Nav />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Routes>
      <Route path="contact"  element={<Contact />} />
      </Routes>
    </>
  );
};

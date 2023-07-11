import { Route, Routes } from "react-router-dom";
import { AuthorRoutes, Home, Nav } from "./Pages";

export const Example7 = () => {
  let content = `component as routes`;
  let styles = { fontSize: "20px", color: "red" };

  return (
    <>
      <h1 style={styles}>{content}</h1>
      <Nav />
      <Routes>
        <Route path="home" element={<Home />} />
        {/* <Route path="author" element={<Author/>}>
            <Route path="books" element={<Books/>}/>
        </Route> */}
        <Route path="author/*" element={<AuthorRoutes />} />
      </Routes>
    </>
  );
};

import { Route, Routes } from "react-router-dom";
import { Nav, PageRoutes } from "./Pages";

export const Example8 = () => {
  let content = `navigation | Link | <Navigate/> | useNavigate()`;
  let styles = { fontSize: "20px", color: "red" };

  return (
    <>
      <h1 style={styles}>{content}</h1>

      <Nav />
      <Routes>
        <Route path="/*" element={<PageRoutes />} />
      </Routes>
    </>
  );
};

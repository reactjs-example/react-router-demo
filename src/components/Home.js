import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate(); // it is a hook
  const navigateToPage = () => {
    navigate("/order-summary");
  };
  return (
    <div>
      Home
      <button onClick={navigateToPage}>Order Summary Navigate</button>
    </div>
  );
};

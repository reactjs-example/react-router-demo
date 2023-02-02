import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Users = () => {
  const users = ["u1", "u2", "u3"];
  return (
    <div>
      Users:
      {users.map((e, i) => {
        return <Link to={i.toString()}>{e} </Link>;
      })}
      <Outlet/>
    </div>
  );
};

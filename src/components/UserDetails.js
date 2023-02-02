import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const params = useParams();
  const { id } = useParams();
  return (
    <div>
      UserDetails: {params.id} {id}
    </div>
  );
};

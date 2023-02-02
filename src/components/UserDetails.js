import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export const UserDetails = () => {
  const params = useParams();
  const { id } = useParams();
  const [ queryParams, setQueryParams ] = useSearchParams();
  return (
    <div>
      UserDetails: {params.id} {id} {queryParams.get("status")}
      <br/>
      <button onClick={()=> setQueryParams({})}>Clear Search</button>
      <button onClick={()=> setQueryParams({status: 'pending'})}>Add Search</button>
    </div>
  );
};

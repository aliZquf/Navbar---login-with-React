
import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>User id is {id}</h1>
    </div>
  );
}
 

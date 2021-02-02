import React from "react";

const User = ({ name, setState }) => {
  const handleClick = () => {
    setState("Kapil");
  };
  return (
    <div>
      <h1>Hellow</h1>
      {name}
      <button onClick={handleClick}>CHange</button>
    </div>
  );
};

export default User;

import React from "react";

const User = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <h1>{user.name}</h1>
      ))}
    </div>
  );
};

export default User;

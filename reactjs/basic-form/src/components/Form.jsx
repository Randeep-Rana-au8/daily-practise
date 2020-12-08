import React from "react";

const Form = (props) => {
  return (
    <form>
      <h1>{props.name}</h1>
      <h1>{props.city}</h1>
      <input type="text" placeholder="Name" />
      <button>Submit</button>
    </form>
  );
};

export default Form;

// props ={
//     name: "Attainu"
// }

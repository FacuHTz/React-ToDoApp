import React from "react";
import "./TodoSearch.css";

function TodoSearch() {

  const state = React.useState();
  
  const onSearchValueChange = (event) =>{
    console.log(event.target.value);
  };

  return <input onChange={onSearchValueChange} className="TodoSearch" placeholder="find tasks" />;
}

export { TodoSearch };

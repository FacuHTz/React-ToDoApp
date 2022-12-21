import React from "react";
import "./TodoSearch.css";

function TodoSearch() {

  const [searchValue, setSearchValue] = React.useState("");

  const onSearchValueChange = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return [<input onChange={onSearchValueChange}
    value={searchValue}
    className="TodoSearch" placeholder="find tasks" />,
  <p>{searchValue}</p>
];
}

export { TodoSearch };

import React,{ useState } from "react";

function ListGroup() {
  const items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedIndex, setSelectedIndex]=useState(-1)

 
  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>NO item found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li className={selectedIndex===index}? "list-group-item active": "list-group-item" key={item} onClick={()=>{selectedIndex(index)}}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

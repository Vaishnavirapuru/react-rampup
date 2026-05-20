import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>NO item found</p>}
      <ul className="list-group-item">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

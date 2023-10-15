import { Fragment } from "react";
import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Fran", "Tokyo", "London", "Paris"];

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, num) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;

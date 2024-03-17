import React, { useState } from "react";
import "./TodoListStyle.css";
const TodoList = () => {
  const [list, setList] = useState([]);
  const [items, setItems] = useState({
    text: "",
    id: "",
  });
  const handleChnageItem = (e) => {
    console.log(e.target.value);
    setItems({
      ...items,
      text: e.target.value,
    });
  };

  const handleClickAdd = (e) => {
    e.preventDefault();
    let newTodo = {
      text: items.text,
      id: new Date().getTime().toString(),
    };
    console.log(newTodo);
    setList([...list, newTodo]);
    setItems({
      text: "",
      id: "",
    });
  };
  const handleClickDelete = (id) => {
    console.log(id);
    let newTodos = list.filter((eachItem) => {
      return eachItem.id !== id;
    });
    console.log(newTodos);
    setList(newTodos);
  };
  return (
    <div>
      {list.length===0 && <h1>There is no item</h1>}
      <form>
        <input
          type="text"
          name="item"
          placeholder="Enter items"
          id="item"
          value={items.text}
          onChange={handleChnageItem}
        />
        <button type="submit" onClick={handleClickAdd}>
          Add
        </button>
      </form>
      <ul>
        {list.map((itemsList, index) => {
          return (
            <li key={index}>
              <span> {itemsList.text}</span>
              <button>edit</button>
              <button onClick={() => handleClickDelete(itemsList.id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;

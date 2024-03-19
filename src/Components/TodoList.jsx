import React, { useState } from "react";
import "./TodoListStyle.css";
const TodoList = () => {
  const [list, setList] = useState([]);
  const [items, setItems] = useState({
    text: "",
    id: "",
  });
  const [editingItem, setEditingItem] = useState({
    id: "",
    isEditing: false,
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
  const changeEditText = (id) => {
    console.log(id);
    setEditingItem({
      ...editingItem,
      id: id,
      isEditing: true,
    });
    let editableItem = list.find((eachItem) => eachItem.id === id);
    console.log(editableItem);
    setItems({
      ...MessageChannel,
      text: editableItem.text,
      id: editableItem.id,
    });
    console.log(editableItem);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    let newTodoss = list.map((value, i) => {
      if (value.id === editingItem.id) {
        return {
          text: items.text,
          id: editingItem.id,
        };
      } else {
        return value;
      }
    });
    setList(newTodoss);
    setItems({
      text: "",
      id: "",
    });
    setEditingItem({
      text: "",
      isEditing: false,
    });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "pink" }}>TO-DO-LIST</h1>
      <form>
        <div className="wrapper">
          <div>
            <input
              className="input-item"
              type="text"
              name="item"
              placeholder="Please enter your items..."
              id="item"
              value={items.text}
              onChange={handleChnageItem}
            />
          </div>
          <div>
            {editingItem.isEditing ? (
              <button className="buttons" type="submit" onClick={handleEdit}>
                edit
              </button>
            ) : (
              <button
                className="buttons"
                type="submit"
                onClick={handleClickAdd}
              >
                Add
              </button>
            )}
          </div>
        </div>
      </form>
      {list.length === 0 && (
        <h1 className="user-info">Oops! There is no item please add...</h1>
      )}

      <ol>
        {list.map((itemsList, index) => {
          return (
            <li className="lists" key={index}>
              <span className="item_name"> {itemsList.text}</span>
              <button
                className="btn"
                onClick={() => changeEditText(itemsList.id)}
              >
                edit
              </button>
              <button
                className="btn"
                onClick={() => handleClickDelete(itemsList.id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TodoList;

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ToDo from "./ToDo";
import CreateArea from "./CreateArea";
import "../styles/styles.scss";


function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos(prevTodos => {
      return [...prevTodos, newTodo];
    });
  }

  function deleteTodo(id) {
    setTodos(prevTodos => {
      return prevTodos.filter((todoItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addTodo} />
      {todos.map((todoItem, index) => {
        return (
          <ToDo
            key={index}
            id={index}
            title={todoItem.title}
            content={todoItem.content}
            onDelete={deleteTodo}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

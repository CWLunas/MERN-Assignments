import React, { useState, useEffect } from 'react';
import "./TodoCss.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const storeTodos = localStorage.getItem('todos');
    if (storeTodos) {
      const parseTodos = storeTodos.split(",");
      setTodos(parseTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', todos.join(","));
  }, [todos]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAdd = () => {
    if (newTodo) {
      const newTask = {
        id: Math.floor(Math.random() * 10000000),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTask]);
      setNewTodo('');
    }
  };

  const handleDelete = (taskId) => {
    const filterTodos = todos.filter((task) => task.id !== taskId);
    setTodos(filterTodos);
  };

  const handleToggle = (taskId) => {
    const updatedTodos = todos.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h3>Oh Joy!</h3>
      <input type="text" className="input-group mb-1" value={newTodo} onChange={handleInputChange} placeholder="Feed Your Procrastination Addiction - Enter a New Daunting Task"/>
      <button type="button" className="btn btn-primary p-0" onClick={handleAdd} style={{marginRight: "10px"}}>Add</button>
      <ul>
        {todos.map((task) => (
          <li className="p-2" key={task.id}>
            <input className="form-check-input" type="checkbox" checked={task.completed} onChange={() => handleToggle(task.id)} style={{marginRight: "10px"}}/>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button type="button" className="btn btn-dark p-0" onClick={() => handleDelete(task.id)} style={{marginLeft: "10px"}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
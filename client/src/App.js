import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import Header from './components/Header.js';
import List from './components/List.js'

function App() {
  const [todo, setTodo] = useState({
      name: '',
      email: '',
      resourceSiteCode: '',
      resourceSiteName: '',
      county: '',
      desiredEnergizationDate: '',
      totalNumberOfInverters: ''
  }); 
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState("");

  useEffect(() => {
    getSubmitForm();
  }, []);

  const getSubmitForm = () => {
    axios.get('./api')
      .then((response) => {
        const data = response.data;
        setTodos(data); 
        console.log('Data received');
      })
      .catch(() => {
        alert('Error retrieving data');
      });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value
    }));
  };

  const submit = (event) => {
    event.preventDefault();

    if (editId !== "") {
      // Update an existing item in the state array
      const updatedTodos = todos.map((item, index) =>
        index === editId ? { ...item, ...todo } : item
      );
      setTodos(updatedTodos);
      setEditId("");
      setTodo({});
    } else {
      // Add a new item to the state array
      setTodos([
        ...todos,
        {
          Id: `${todo.name}-${Date.now()}`,
          ...todo,
        },
      ]);
      resetSubmitForm();
    }
  };

  const resetSubmitForm = () => {
    setTodo({
      name: '',
      email: '',
      resourceSiteCode: '',
      resourceSiteName: '',
      county: '',
      desiredEnergizationDate: '',
      totalNumberOfInverters: ''
    });
  };

  const handleEdit = (id) => {
    setEditId(id);
    const editTodo = todos.find((item) => item.Id === id);
    setTodo(editTodo);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((item) => item.Id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
    <div className="header">
      <Header/>
    </div>
    <div className="formContainer">
      
      <form className="material-form" onSubmit={submit}>
        <div className="material-form__container">
          <input className="material-form__input" type="text" name="name" placeholder="Name" value={todo.name} onChange={handleChange} />
          <div class="material-form__focus-animation"></div>
        </div>
        <div className="material-form__container">
          <input className="material-form__input" type="email" name="email" placeholder="Email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" value={todo.email} onChange={handleChange} />
          <div class="material-form__focus-animation"></div>
          <p class="material-form__error">Please enter valid email address</p>
        </div>
        <div className="material-form__container">
          <input className="material-form__input" type="text" name="resourceSiteCode" placeholder="Resource Site Code " value={todo.resourceSiteCode} onChange={handleChange} />
          <div class="material-form__focus-animation"></div>
        </div>
        <div className="material-form__container">
          <input className="material-form__input" type="text" name="resourceSiteName" placeholder="Resource Site Name" value={todo.resourceSiteName} onChange={handleChange} />
          <div class="material-form__focus-animation"></div>
        </div>
        <div className="material-form__container">
          <input className="material-form__input" type="text" name="county" placeholder="County" value={todo.county} onChange={handleChange} />
          <div class="material-form__focus-animation"></div>
        </div>
        <div className="material-form__container">
          <input className="material-form__input" type="date" name="desiredEnergizationDate" placeholder="Desired Energization Date" value={todo.desiredEnergizationDate} onChange={handleChange} />
          <div class="material-form__focus-animation"></div>
        </div>
        <div className="material-form__container">
          <input className="material-form__input" type="number" name="totalNumberOfInverters" placeholder="Total number of Inverters" value={todo.totalNumberOfInverters} onChange={handleChange} />
          <div class="material-form__focus-animation"></div>
        </div>
        
          <button className="material-form__button">Submit</button>
      </form>
    </div>
    <div>
      <ul>
            <List 
              list={todos}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
      </ul>
    </div>

    </>
  );
}

export default App;
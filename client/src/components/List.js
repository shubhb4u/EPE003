import React from 'react';
import './List.css';

const List = ({handleDelete,handleEdit,list}) => {
  return (
    <div className="allTodos">
        {list.map((t) => (
            <li className="singleTodo">
              <div className="todoText">
              <span key={t.id}>{t.name}</span>
              <span key={t.id}>{t.email}</span>
              </div>
              
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </li>
        ))}
    </div>
  )
}

export default List
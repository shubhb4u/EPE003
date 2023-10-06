import React from 'react';
import './List.css';

const List = ({handleDelete,handleEdit,list}) => {
  return (
    <div className="allTodos">
        {list.map((t) => (
            <li key={t.Id} className="singleTodo">
              <div className="todoText">
                <span>{t.name}</span>
                <span>{t.email}</span>
              </div>
              
              <button onClick={() => handleEdit(t.Id)}>Edit</button>
              <button onClick={() => handleDelete(t.Id)}>Delete</button>
            </li>
        ))}
    </div>
  )
}

export default List
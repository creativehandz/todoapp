import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        
        <div className="col-4 mb-5">
            <div className="card bg-light shadow">
                <div className="card-body">
           <h4 className="card-title">{todo.title}</h4>
           <p className="card-text">{todo.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
        </div>
        </div>
        </>
    )
}

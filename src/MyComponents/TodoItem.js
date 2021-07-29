import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <>

            <div className="col-4 mb-5">
                <div className="card bg-light shadow">
                    <div className="card-body">
                        <h4 className="card-title">{todo.title}</h4>
                        <p className="card-text">{todo.desc}</p>
                        <div className="d-flex justify-content-start">
                        <button className="btn btn-sm btn-success" >Start</button>
                        <div className="timer px-2">0:22</div>
                        
                        <button className="btn btn-sm btn-danger ms-auto" onClick={() => { onDelete(todo) }}>Delete</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

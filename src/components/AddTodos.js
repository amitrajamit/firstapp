import React, { useState } from 'react';

const AddTodos = ({addTodo}) => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert('title and description cannot be empty')
        }
        addTodo(title,desc);
    }
    return (
        <div className="container my-3 col-md-6">
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" onChange={(e)=>{setTitle(e.target.value)}} className="form-control" value={title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default AddTodos;

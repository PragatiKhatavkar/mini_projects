import React, { useState } from 'react'
import CreateItem from './CreateItem';

const ToDo = () => {
    const [addItem , setAddItem] = useState("");
    const [components , setComponents] = useState([])

    function todoFunc(event){
        event.preventDefault();
        addItem && setComponents([...components, <CreateItem addItem={addItem}/>])
        setAddItem(""); // Clear input after adding
    }

    return (
        <div className="todo-container">
            <h1>To-Do App</h1>
            <form className='addItemAlignment' onSubmit={todoFunc}>
                <input 
                    type="text" 
                    value={addItem}
                    onChange={(e)=> setAddItem(e.target.value)}
                    placeholder="Enter a new task..."
                />
                <button type='submit'>Add New Item</button>
            </form>
            <div className="todo-list">
                    {components}
            </div>
        </div>
    )
}

export default ToDo
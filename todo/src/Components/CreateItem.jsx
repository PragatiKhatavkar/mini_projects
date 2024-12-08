import React from 'react'

const CreateItem = (addItem) => { 
    console.log(addItem.addItem);
     
    function removeItem(event){
        console.log(event.target.parentNode.remove());
        
    }
  return (
    <div className='todoInfo'>
      <p>{addItem.addItem}</p>
      <button onClick={removeItem}>Delete</button>
    </div>
  )
}

export default CreateItem

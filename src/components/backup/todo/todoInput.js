import React from 'react'
import classes from './todoInput.module.css';

function TodoInput() {
  return (
    <div>
      <input type='text' className={classes.input}></input>
    </div>
  )
}

export default TodoInput;

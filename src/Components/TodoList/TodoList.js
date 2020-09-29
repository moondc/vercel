import React from 'react';
import './TodoList.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export function TodoList(props) {

  const addItem = () => {props.addItem(props.todoItemLbl)};
  const removeItem = () => {props.removeItem(props.todoItemLbl)};

  return (
    <React.Fragment>
    <ul>
        {props.items.map(value => {
            return <li key={value}>{value}</li>
        })}
    </ul>
    <TextField  label="Todo Item" onChange={props.handleChange} value={props.todoItemLbl}></TextField >
    <Button variant="contained" color="primary" onClick={addItem} >AddItem</Button>
    <Button variant="contained" color="primary" onClick={removeItem} >RemoveItem</Button>
    </React.Fragment>
  );
}



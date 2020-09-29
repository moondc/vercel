import React from 'react';
import { connect } from'react-redux';
import { AddItem, RemoveItem, UpdateLabel } from '../../StateManagement/Redux/Actions/TodoList';
import { TodoList } from './TodoList';

class TodoListContainer extends React.Component{
  render(){
    return <TodoList handleChange={this.props.handleChange} todoItemLbl={this.props.TodoItemLbl} addItem={this.props.addItem} removeItem={this.props.removeItem} items={this.props.items}/>;
  }
}

const mapStateToProps = state => {
    return {
      items: state.ItemList,
      TodoItemLbl: state.TodoItemLbl
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: value =>{dispatch(AddItem(value))},
    removeItem: value => {dispatch(RemoveItem(value))},
    handleChange: event => {dispatch(UpdateLabel(event.target.value))}
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoListContainer);
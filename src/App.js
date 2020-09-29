import React from 'react';
import TodoListContainer from './Components/TodoList/TodoListContainer';
import './App.css';
import { WebcamCapture } from'./Components/Camera/Camera';

function App() {
  return (
    <div >
      {/* TodoList Example
      <TodoListContainer/> */}
      <WebcamCapture/>
    </div>
  );
}

export default App;

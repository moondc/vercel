import {createStore} from 'redux';
import TodoList from './Reducers/TodoList';
import { loadState, saveState } from './../StatePersistance';

const persistedState = loadState();
const store = createStore(TodoList, persistedState);

store.subscribe(() => {
    let state = store.getState();
    saveState({
      ItemList: state.ItemList,
      TodoItemLbl: state.TodoItemLbl
    });
  });
export default store;
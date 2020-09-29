const initialState = { 
    ItemList: ['1', '2', '3'],
    TodoItemLbl: 'placeholder'
 };

function TodoListReducer(state = initialState, action){
    switch(action.type){
        case 'AddItem':
            if(state.ItemList.find(a => a === action.payload))
                return state;
            return {
                ...state,
                ItemList: [...state.ItemList, action.payload]
            }
        case 'RemoveItem':
            let newState = {...state, ItemList: state.ItemList.slice(0)}
            newState.ItemList = newState.ItemList.filter(value => value !== action.payload);
            return newState;
        case 'UpdateLabel':
            return {
                ...state,
            TodoItemLbl: action.payload
        }
        default:
            return state;
    }
}

export default TodoListReducer;
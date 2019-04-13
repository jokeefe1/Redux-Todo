import { ADD, COMPLETE, CLEAR } from '../actions'

const initialState = {
    todos: [
        {
            task: 'Clean Room',
            id: 1,
            completed: false
        },
        {
            task: 'Do Laundry',
            id: 2,
            completed: false
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                todos: [
                    ...state.todos,
                    {
                        task: action.text,
                        id: Date.now(),
                        completed: false
                    }
                ]
            }
        case CLEAR:
            return {
                todos: []
            }
        case COMPLETE:
            const todoID = state.todos.map( todo => {
                return todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            })
                return {
                    todos: [ ...todoID ]
                }
        default:
            return state;
    }
};

export default reducer;

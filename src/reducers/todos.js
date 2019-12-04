
const todos = (state = [], action) => {
    // return state
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    delete: false
                }
            ]

        case 'TOGGLE_TODO':
            return state.map(todo => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)

        case 'DELETE_TODO':
            return state.map(todo =>
                (todo.id == action.id) ?
                    { ...todo, delete: true } : todo)

        default:
            return state
    }
}

export default todos;
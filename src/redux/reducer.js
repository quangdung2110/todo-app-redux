const initState = {
    filter : {
        search: '',
        status: 'All',
        priority: []
    },  
    todoList: [
        {id: 1, name: 'Learn JavaScript', completed:false, priority: "Medium"},
        {id: 2, name: 'HTML', completed: true, priority: "High"}
    ]
}

const rootReducer = (state = initState, action) => {
    let ans;
    switch (action.type) {
        case 'add':
            ans = {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
            break
        case 'search':
            ans = {
                ...state,
                filter: {
                    ...state.filter,
                    search: action.payload
                }
            }
            break
        case 'filter':
            ans = {
                ...state,
                filter: {
                    ...state.filter,
                    status: action.payload
                }
            }
            break
        case 'priority':
            ans = {
                ...state,
                filter: {
                    ...state.filter,
                    priority: action.payload
                }
            }
            break
        case 'toggle':
            const newTodoList = state.todoList
            newTodoList.map((todo) => action.payload === todo.id ? todo.completed = !todo.completed : todo.completed)
            ans = {
                ...state,
                todoList: newTodoList
            }
            break
        default:
            return state
    }
    console.log(ans)
    return ans;
}

export default rootReducer
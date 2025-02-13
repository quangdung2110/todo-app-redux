export const searchTextSelector = (state) => {
    return state.filter.search
}
export const statusFilerSelector = (state) => {
    return state.filter.status
}
export const todoListSelector = (state) => {
    return state.todoList.filter((todo) => {
        if (state.filter.status === 'All') {
            if (state.filter.priority.length === 0)return todo.name.includes(state.filter.search)
            return todo.name.includes(state.filter.search) && state.filter.priority.includes(todo.priority)
        }
        if (state.filter.status === 'Completed') {
            if (state.filter.priority.length === 0)return todo.name.includes(state.filter.search) && todo.completed === true
            return todo.name.includes(state.filter.search) && todo.completed === true && state.filter.priority.includes(todo.priority)
        }
        if (state.filter.priority.length === 0)return todo.name.includes(state.filter.search) && todo.completed === false
        return todo.name.includes(state.filter.search) && todo.completed === false && state.filter.priority.includes(todo.priority)
    })
}
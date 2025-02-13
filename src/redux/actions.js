const addTodo = (data) => {
    return {
        type : 'add',
        payload : data
    }
}
const searchTextTodo = (data) => {
    return {
        type: 'search',
        payload: data
    }
}
const statusFilterChange = (data) => {
    return {
        type: 'filter',
        payload: data
    }
}
const priorityFilterChange = (data) => {
    return {
        type: 'priority',
        payload: data
    }
}
const toggleStatusChange = (data) => {
    return { 
        type: 'toggle',
        payload: data
    }
}
export {addTodo, searchTextTodo, statusFilterChange, priorityFilterChange, toggleStatusChange}
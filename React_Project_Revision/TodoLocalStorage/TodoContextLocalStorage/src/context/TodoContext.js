import React from 'react';

const TodoContext = React.createContext({
    // todos: [
    //     { id: '1', todoTask: 'Salaam', isCompleted: false }
    // ],
    addTodo: (todoTask) => { },
    editTodo: (id) => { },
    deleteTodo: (id) => { },
    completeTodo: (id) => { }
});

const TodoContextProvider = TodoContext.Provider;
function useTodo() {
    return React.useContext(TodoContext);

}

export { TodoContext, TodoContextProvider, useTodo }

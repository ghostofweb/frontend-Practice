import {createContext,useContext} from "react"

export const TodoContext = createContext({
    todo :[
        {
            id:1,
            todo:"todo msg",
            complete : false,

        }
    ],
    addTodo : (todo) => {},
    updatedTodo: (id,todo) =>{} ,
    deleteTodo: (id) => {},
    toggleComplete : (id) => {}
})


export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const todoProvider = TodoContext.Provider
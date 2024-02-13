import { useEffect, useReducer } from "react";
import { ToDoReducer } from "./ToDoReducer";

const initialState = [];
const init = () =>{
    return JSON.parse( localStorage.getItem('toDos') ) || []
}

export const useToDo = () => {
    const [toDos, dispatchToDos] = useReducer(ToDoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('toDos',JSON.stringify(toDos));

    }, [toDos])
    

    const  handleNewToDo= (toDo) => {
        const action = {
            type:'[TODO] Add ToDo',
            payload: toDo
        }
        dispatchToDos( action );
    }

    const handleDeleteToDo = ( id )=>{
        dispatchToDos({
            type:'[TODO] Remove ToDo',
            payload: id
        });
        
    }

    const handleToggleToDo = (id)=>{
        dispatchToDos({
            type:'[TODO] Toggle ToDo',
            payload: id
        })
    }

  return ({
    toDos,
    toDosCount:toDos.length,
    pendingToDosCount:toDos.filter(toDo =>!toDo.done).length,
    handleDeleteToDo,
    handleToggleToDo,
    handleNewToDo
})
}

import {
    ADD_TODO,
    TOGGLE_TODO
} from './actionTypes';

let nextId =0;
export const addToDo = (text) => ({
    type: ADD_TODO,
    id: nextId++,
    text
})

export const toggleToDo = (id) => ({
    type: TOGGLE_TODO,
    id 
})
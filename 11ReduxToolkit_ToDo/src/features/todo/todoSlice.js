import { CreateSlice, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text:"Hello World"}]
}

export const todoSslice= createSlice({
    name: 'todo',
    initialState,
})
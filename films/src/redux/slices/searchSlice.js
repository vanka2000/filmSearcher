import { createSlice } from "@reduxjs/toolkit";
import films from "../../services/film";


const initialState = {
    films,
    filteredFilms : [...films]
}

export const searchSlice = createSlice({
    name : 'search',
    initialState,
    reducers : {
        getSearch : function (state, action){
            return {...state, filteredFilms: films.filter(item => item.name.toLowerCase().includes(action.payload.toLowerCase()))}
        },
        addFilm : function (state, action) {
            action.payload.id = state.films.length + 1
            action.payload.rating = 0
            return {...state, films: [...state.films, action.payload], filteredFilms: [...state.films, action.payload]}
        }
    }
})

export const { getSearch, addFilm } = searchSlice.actions
export default searchSlice.reducer
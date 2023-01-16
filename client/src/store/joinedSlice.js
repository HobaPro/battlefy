import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";






const joinedSlice = createSlice({
name : 'login',
initialState : localStorage.getItem("tournaments")?JSON.parse(localStorage.getItem("tournaments",)):{
tournaments: [],

},
reducers : {
  joinedTournament(state,action){
    let tournamentData = action.payload;
    state.tournaments.push(tournamentData);
    window.localStorage.setItem("tournaments", JSON.stringify(state));
  } 
}

});


export const joinedActions = joinedSlice.actions;
export default joinedSlice;
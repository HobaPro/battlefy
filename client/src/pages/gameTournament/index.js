import React, { useEffect, useState } from "react";
import "./index.scss";
import data from "../../utils/game.json";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { joinedActions } from "../../store/joinedSlice";
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

const GameTournament = () => {
  let location = useLocation();


  const dispatch = useDispatch();


  const tournaments = useSelector(state => state.joined.tournaments);




  const [gameData,setGameData]=useState([]);
  let { id } = useParams();
  let game = data.games;
  let array = [];


  let result = tournaments.filter(games => games.title === gameData.title);
  console.log(gameData);

    const joinTournamentHandler = () => {


    if(localStorage.getItem('user') !== null){

      if(result.length == 0 ){
        const returnedTarget = Object.assign(gameData, {location:location.pathname});
        console.log(returnedTarget);
        dispatch(joinedActions.joinedTournament(returnedTarget))
      }
    }else{
      alert(`You must login first`);
    }
      
   
    }


  useEffect(()=>{
    setGameData(array[0]);
  },[array])


  //filter tournaments to get specifec game tournament 
  const gametournaments = game?.map((games) => {
    let tournament = games.tournaments;
    const specifecTournaments = tournament?.map((gamee) => {
      if (gamee.title === id) {
        array.push(gamee);
      }else return false
    });
  });




  return (
  <div className="game_tournament">

    <h1>{gameData.title}</h1>
    <img src={gameData.img} alt="" />
    <hr />

    <div className="teams">
      0 / {gameData.teams}
      <span><br /> Teams Registered</span>
    </div>
    <hr />
    <h2>Details</h2>

    <div className="data">
    <div>
    <div  className="details">
      <h3>Date & Time</h3>
      <div className="subdetails">
      <h4>{gameData.date}</h4>
      <h4>{gameData.time}</h4>
      </div>
    </div>

    <div  className="details">
      <h3>Format</h3>
      <div className="subdetails">
      <h4>{gameData.team_nums}V{gameData.team_nums}</h4>
      <h4>Team Registration is allowed</h4>
      </div>
      </div>
      </div>


    </div>
    {result.length == 0 ?<button className="join" onClick={joinTournamentHandler} > Join Tournament</button>: <button className="join"  > Joined</button> }
    
  </div>
  );
};

export default GameTournament;

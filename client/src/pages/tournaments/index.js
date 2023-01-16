import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import data from "../../utils/game.json";
import { useParams } from "react-router-dom";
import TournamentCard from "../../components/tournamentCard";



const Tournament = () => {


  let { id } = useParams();
  let game = data.games;

  let filter_game  = (item) => {
    if (item.name === id   ) {return item;}};
    let singleGame = game.filter(filter_game);
    let tournament = singleGame[0].tournaments;
    const tournaments = tournament?.map((itm ,index) => {
    
        return(
          <>
          
          <Link to = {`/${id}/${itm.title}`}>
          <TournamentCard  
          img   = {itm.img}
          title ={itm.title}
          date  ={itm.date}
          time  ={itm.time}
                
           />
           </Link>
          </>
        )
      })

  return (
    <>
    <div className="tournaments">
      <img src={singleGame[0].img} alt="" />
    <h1 className="game_title">{id}</h1>
    <hr />
    <h3 className="find_tournament">Find Tournaments</h3>

    <div className="tournament">
    {tournaments}
    </div>
    </div>
    </>
  );
};

export default Tournament;

import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import { useSelector } from 'react-redux';
import TournamentCard from '../../components/tournamentCard';

const JoinedTournament = () => {

  const tournaments = useSelector(state => state.joined.tournaments);


  const noTournament = () =>{
    return(
      <>
      
        <div className="content">
          <svg
            className="image"
            xmlns="http://www.w3.org/2000/svg"
            width="65.867"
            height="66.538"
            viewBox="0 0 65.867 66.538"
          >
            <g
              fill="#fff"
              id="prefix__video-game-boo"
              transform="translate(.003 -.002)"
            >
              <path
                id="prefix__Path_5948"
                d="M14.377 34.876A9.966 9.966 0 0 1 5.128 21.21l2.1-5.26A2.08 2.08 0 0 1 8.141 12h20.795a2.079 2.079 0 1 1 0 4.159h-.671l-2.95 7.372a10.4 10.4 0 0 0-.643 2.412 10.443 10.443 0 0 1-10.295 8.933zM8.993 22.754a5.8 5.8 0 0 0 5.387 7.963 6.268 6.268 0 0 0 6.177-5.357 14.686 14.686 0 0 1 .9-3.374l2.332-5.825h-3.964l-3.585 7.17a2.08 2.08 0 0 1-3.721-1.86l2.656-5.31h-3.546z"
                data-name="Path 5948"
                transform="translate(7.832 21.266)"
              ></path>
              <path
                id="prefix__Path_5949"
                d="M32.573 66.54a36.857 36.857 0 0 1-15.6-3.765 2.079 2.079 0 1 1 1.835-3.732 32.641 32.641 0 0 0 13.813 3.338c14.523 0 23.845-11.249 27.471-16.636h-8.784a2.081 2.081 0 0 1-1.07-3.865c6.1-3.654 9.194-11.127 10.517-14.318l-9.1 1.517a2.077 2.077 0 0 1-2.421-2.049v-4.159a18.723 18.723 0 0 0-35.712-7.849 4.6 4.6 0 0 0 4.467 3.693h.54a5.294 5.294 0 0 0 4.126-2 2.115 2.115 0 0 1 3.266 0 5.283 5.283 0 0 0 4.12 2h.241l.047 1.04.044-.887-.019-.144h.025v-.006h.147c.03 0 .069 0 .108.006a4.6 4.6 0 0 0 4.5-4.3 2.059 2.059 0 0 1 2.074-1.946h.133a2.083 2.083 0 0 1 1.944 2.21 8.784 8.784 0 0 1-6.677 7.938v4.404a2.079 2.079 0 1 1-4.159 0v-4.306a9.508 9.508 0 0 1-4.159-1.819 9.494 9.494 0 0 1-4.159 1.822v4.3a2.079 2.079 0 0 1-4.159 0v-4.4a8.881 8.881 0 0 1-4.009-2.213 19.1 19.1 0 0 0-.161 2.457v6.238a2.081 2.081 0 0 1-2.079 2.079 2.091 2.091 0 0 1-.932-.219l-4.638-2.317a25.9 25.9 0 0 0 5.387 9.674 2.079 2.079 0 1 1-3.119 2.75A29.964 29.964 0 0 1 .169 29.833a4.154 4.154 0 0 1 5.85-4.894l1.628.812v-2.88a22.874 22.874 0 0 1 45.749 0v1.705l6.671-1.112a4.075 4.075 0 0 1 .685-.055 4.159 4.159 0 0 1 3.848 5.742c-1.14 2.753-3.352 8.088-7.47 12.438h6.654a2.1 2.1 0 0 1 1.769.984 2.067 2.067 0 0 1 .091 2.024c-.108.219-11.224 21.943-33.053 21.943z"
                data-name="Path 5949"
              ></path>
            </g>
          </svg>
          <h1 className="title">
            Booo!! You haven't joined any tournaments yet, find one now!
          </h1>
          <Link className='button' to='/'>Browse tournaments</Link>
        </div>
     
    </>
    )
  }

  const withTournaments = () => {
   const datatour=tournaments?.map((itm)=>{

    return(
      <>
      
      <Link to={itm.location}>
            <TournamentCard  
          img   = {itm.img}
          title ={itm.title}
          date  ={itm.date}
          time  ={itm.time}
                
           /></Link>
      </>
    )}
    )

   return datatour
  }

  return (
   
    <div className="joined_tournament">
      {tournaments.length !== 0?<div className='cards'>{withTournaments()}</div> :noTournament()}
   
    </div>
       
   

  );
}

export default JoinedTournament;


import "./index.scss";

const TournamentCard = (props) => {
  return (
      
<div className="tournament_card" >
<div className="image">
<img src={props.img} alt="image" />
</div>
<div className="down_data">
<h1 className="title">{props.title}</h1>
<div className="date_time">
<h6 > {props.date} </h6>
<h6> {props.time} </h6> 

</div>
</div>
</div>

  );
};

export default TournamentCard;

import "./index.scss";
import data from "../../utils/game.json";
import { useState, useEffect, createRef } from "react";
import { Link } from "react-router-dom";

const Home1 = () => {
  let closeNav = createRef();
  const closeNavGames = () => {
    closeNav.current.click();
  };

  const arrowDown = () => {
    return (
      <>

        <svg width="24" height="24" viewBox="0 0 24 24">
          <g id="prefix__icon-back" transform="rotate(-90 12 12)">
            <path
              id="prefix__Icon_Arrow_Left_background"
              fill="none"
              d="M0 0H24V24H0z"
              data-name="Icon/ Arrow Left background"
            ></path>
            <g
              id="prefix__Group_Copy_3"
              data-name="Group Copy 3"
              transform="rotate(-90 13.44 4.08)"
            >
              <g id="prefix__Regular">
                <path
                  id="prefix__Shape"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2px"
                  d="M0 5.014L4.913.1A.343.343 0 0 1 5.4.1l4.913 4.913"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </>
    );
  };

  let games = data.games;
  const [game, setGame] = useState(games[0]);
  const [wide, setWide] = useState(true);

  const myFunction = () => {
    if (!wide) {
      var element = document.querySelector(".cards");
      element.classList.toggle("active");
    }
  };

  useEffect(() => {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth >= 900) {
      setWide(true);
    } else {
      setWide(false);
    }
  });

  const card = games?.map((itm, index) => {
    return (
      <>
        <div className="all" >
          <div
            className="card"
            onMouseOver={() => setGame(games[index])}
            onClick={() => {
              {
                setGame(games[index]);
              }
              closeNavGames();
            }}
          >
            <img src={itm.img} alt="image" />
          </div>
          <div>{!wide && <h6>{itm.name}</h6>}</div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="home1">
        <div className="image">
          <img className="bg_img" src={game.bg_img} alt="" />
        </div>

        <div className="title">
          <h1>{game.name}</h1>
          <h3>Brows Game Tournaments</h3>
          <Link to={`/${game.name}`}>
            <span>Select</span>
            <i></i>
          </Link>
        </div>

        <div className="select">
          <h4 className="choose" ref={closeNav} onClick={myFunction}>
            SELECT YOUR GAME <span>{arrowDown()}</span>
          </h4>
          <div className="line"></div>
        </div>

        <div className="cards ">
          <div className="game">{card}</div>
        </div>
      </div>
    </>
  );
};

export default Home1;

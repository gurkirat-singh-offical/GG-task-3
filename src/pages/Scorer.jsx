import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Scorer()
 {
  const naviagte = useNavigate();
  // setting data
  const Team1 = JSON.parse(localStorage.getItem("TeamA"));
  const Team2 = JSON.parse(localStorage.getItem("TeamB"));


  // using useState  to maneges states
  const [Score, setScore] = useState(0);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [firstBatsmanBatting, setFirstBatsmanBatting] = useState(true);
  const [balls, setBalls] = useState(0); 
  const [crun, setCRun] = useState([]);

  //handleing current run   
  const handleCRun = (run) => {
    let runs = run;
    if (crun) {
      runs = [...crun, run];
    } else {
      runs = run;
    }
    setCRun(runs);
  };
  localStorage.setItem("cRun",JSON.stringify(crun))
  console.log(setCRun);

  // handle action in every ball
  function handleRunClick(runs) {
    if (runs === 0) {
      const currBalls = balls + 1;
      setBalls(currBalls);
    }
    else if (runs === 1 || runs === 3 || runs === 5) {
      if (firstBatsmanBatting) {
        const score = score1 + runs;
        setScore1(score);
        setFirstBatsmanBatting(false);
      } 
      else {
        const score = score2 + runs;
        setScore2(score);
        setFirstBatsmanBatting(true);
      }

      let currScore = Score + runs;
      setScore(currScore);

      const currBalls = balls + 1;
      setBalls(currBalls);
    }
    else if (runs === 2 || runs === 4 || runs === 6) {
      if (firstBatsmanBatting) {
        let score = score1 + runs;
        setScore1(score);
      } else {
        let score = score2 + runs;
        setScore2(score);
      }
      let currScore = Score + runs;

      setScore(currScore);

      const currBalls = balls + 1;
      setBalls(currBalls);
    } 
    else if (runs === "wideBall" || runs === "noBall") {
      let currScore = Score + 1;
      setScore(currScore);
      // const currBalls = balls + 1;
      // setBalls(currBalls);
    } 
    else if (runs === "Out") {
      const currBalls = balls + 1;
      setBalls(currBalls);
    } 
  }

  console.log(firstBatsmanBatting);
  //console.log(crun);
  // getting total score
  const currScore = Score;
  localStorage.setItem("score", JSON.stringify(currScore));
  let cOvers = Math.floor(balls / 6);
  let cBalls = balls % 6;

  // const currOvers 
  localStorage.setItem("overs", JSON.stringify(cOvers));
  localStorage.setItem("Balls", JSON.stringify(cBalls));

  // handeling undo button
  const handleUndo= (runs)=>{
    if(firstBatsmanBatting){
        let lastindex = crun.length - 1 ;
        let score1
        if(crun.length === 1){
            score1 = 0;
        }else{
            score1 = Score - crun[lastindex];
        }
        let score = score1 - crun[lastindex]

        setScore1(score1);
        setScore(score1);
        
        let cBall = balls-1
        if (cBall === 0) {
            setBalls(0);
        } 
        else {
            setBalls(cBall)
        }   
    }
    else{
        let lastindex = crun.length - 1 ;
        let score1 = Score - crun[lastindex] ;
        let score = score2 - crun[lastindex] ;
        
        setScore2(score);
        setScore(score1);
        if(balls === 0){
            setBalls(0);
        }

        let cBall = balls - 1;
        setBalls(cBall);
    }
  }
  
  return (
    <>
      <div className="m-5 text-2xl font-semibold">Batting Team : TeamA</div>
      <div className="mx-10 text-xl font-semibold ">
        <div className="flex justify-evenly  py-2">
          <p>player name:"Gurkirat"</p>
          <p>Runs:{score1}</p>
        </div>
        <div className="flex justify-evenly py-2">
          <p>player name:"Gurkirat"</p>
          <p>Runs:{score2}</p>
        </div>
      </div>

      <div className="text-xl font-semibold m-5 flex justify-evenly">
        <p>Bowler name : YoYo</p>
        <p> 0-0</p>
      </div>

      <div className="border m-10 border-black">
        <div className="flex justify-evenly text-2xl font-semibold my-2">
          <button
            onClick={() => {
              handleRunClick(0);
              handleCRun(0);
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              handleRunClick(1);
              handleCRun(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              handleRunClick(2);
              handleCRun(2);
            }}
          >
            2
          </button>
        </div>
        <hr className="border-gray-700" />
        <div className="flex justify-evenly text-2xl font-semibold my-2">
          <button
            onClick={() => {
              handleRunClick(3);
              handleCRun(3);
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              handleRunClick(4);
              handleCRun(4);
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              handleRunClick(5);
              handleCRun(5);
            }}
          >
            5
          </button>
        </div>
        <hr className="border-gray-700" />
        <div className="flex justify-evenly text-2xl font-semibold my-2">
          <button
            onClick={() => {
              handleRunClick(6);
              handleCRun(6);
            }}
          >
            6
          </button>
        </div>
        <hr className="border-gray-700" />

        <div className="flex justify-evenly text-2xl font-semibold my-2">
          <button
            onClick={() => {
              handleRunClick("wideBall");
              handleCRun("wideBall");
            }}
          >
            wide ball
          </button>
          <button
            onClick={() => {
              handleRunClick("noBall");
              handleCRun("noBall");
            }}
          >
            No ball
          </button>
          <button
            onClick={() => {
              handleRunClick("Out");
              handleCRun("Out");
            }}
          >
            Out
          </button>
        </div>
      </div>

      <div className="m-5 text-2xl ">
        <p> Total Score : {Score}</p>
        <p>
          Current overs: {Math.floor(balls / 6)}.{balls % 6}
        </p>
      </div>

      <div className="mx-[100px] text-2xl font-semibold flex justify-evenly">
        <button
          className="bg-gray-200 p-2 rounded-xl"
          onClick={() => {
            handleUndo();
          }}
        >
          Undo
        </button>
        <button
          className="bg-gray-200 p-2 rounded-xl"
          onClick={() => {
            naviagte("/viewer");
          }}
        >
          View Score
        </button>
      </div>
    </>
  );
}

export default Scorer

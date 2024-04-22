import React from 'react'
import { useNavigate } from 'react-router-dom';

function Viewer() {
    // geting data
    const navigate = useNavigate()
    const currScore = JSON.parse(localStorage.getItem("score"))
    const currOver = JSON.parse(localStorage.getItem("overs"));
    const currBalls = JSON.parse(localStorage.getItem("Balls"));

    const currRun = JSON.parse(localStorage.getItem("cRun"))
  return (
    <>
      <div className="m-5  text-2xl">
        <div className="font-semibold flex justify-evenly">
          <p>current batsman: </p>
          <p>Gurkirat Singh</p>
          <p>runs:47</p>
        </div>
        <div className="font-semibold">
          <p>current bolwer : </p>
          <p>Gurkirat Singh</p>
          <p>2-23 0.0</p>
        </div>
        <div className="text-3xl font-semibold ">
          <p>current Score :{currScore}</p>
          <p>
            current Overs: {currOver}.{currBalls}
          </p>
        </div>
      </div>

      <div className="text-3xl m-10 font-bold">
        <h3>ScoreCard:</h3>
        <div className="flex justify-evenly">
          <h2>Event</h2>
          <h2>Overs</h2>
        </div>
        {currRun ? (
          <div className="mx-[80px] my-5">
            {currRun.map((run) => (
              <div>
                <p>{run}</p>
              </div>
            ))}
          </div>
        ) : (
          <h1>Match Not Started yet.</h1>
        )}
      </div>

      <div>
        <button className="bg-gray-200 p-2 rounded-xl" onClick={()=>{navigate("/scorer");}}>view Scorer</button>
      </div>
    </>
  );
}

export default Viewer
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
  return (
    <>
      <div className="text-3xl font-bold m-10">welcome to My CricBuzz App</div>
      <p className="text-3xl font-bold m-10"> Continue as</p>
      <div className="text-3xl font-bold m-10 p-5 flex justify-evenly">
        <div>
          <button
            className="bg-gray-400 p-5 rounded-xl "
            onClick={() => {
              navigate("/scorer");
            }}
          >
            Scorer
          </button>
        </div>

        <button
          className="bg-gray-400 p-5 rounded-xl "
          onClick={() => {
            navigate("/viewer");
          }}
        >
          Viewer
        </button>
      </div>
    </>
  );
}

export default Login
import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom';

function App() {
  const TeamA = [
    {
      id: 1,
      name: "A",
      score: 0,
    },
    {
      id: 2,
      name: "B",
      score: 0,
    },
    {
      id: 3,
      name: "C",
      score: 0,
    },
    {
      id: 4,
      name: "D",
      score: 0,
    },
    {
      id: 5,
      name: "E",
      score: 0,
    },
    {
      id: 6,
      name: "F",
      score: 0,
    },
    {
      id: 7,
      name: "G",
      score: 0,
    },
    {
      id: 8,
      name: "H",
      score: 0,
    },
    {
      id: 9,
      name: "I",
      score: 0,
    },
    {
      id: 10,
      name: "J",
      score: 0,
    },
    {
      id: 11,
      name: "K",
      score: 0,
    },
  ];

  const TeamB = [
    {
      id: 12,
      name: "1",
      score: 0,
    },
    {
      id: 13,
      name: "2",
      score: 0,
    },
    {
      id: 14,
      name: "3",
      score: 0,
    },
    {
      id: 15,
      name: "4",
      score: 0,
    },
    {
      id: 16,
      name: "5",
      score: 0,
    },
    {
      id: 17,
      name: "6",
      score: 0,
    },
    {
      id: 18,
      name: "7",
      score: 0,
    },
    {
      id: 19,
      name: "8",
      score: 0,
    },
    {
      id: 20,
      name: "9",
      score: 0,
    },
    {
      id: 21,
      name: "10",
      score: 0,
    },
    {
      id: 22,
      name: "11",
      score: 0,
    },
  ];
  localStorage.setItem("TeamA", JSON.stringify(TeamA));
  localStorage.setItem("TeamB", JSON.stringify(TeamB));



  return (
    <>
      <Header />
      
      <Outlet></Outlet>
    </>
  );
}

export default App
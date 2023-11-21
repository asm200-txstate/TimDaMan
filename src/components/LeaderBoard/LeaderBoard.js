import React, { useState } from "react";
import "./LeaderBoard.css";


export default function LeaderBoard()  {
    const [leaderboardData, setLeaderboardData] = useState([
        { name: "Player 1", score: 100 },
        { name: "Player 2", score: 75 },
        { name: "Player 3", score: 120 }
    ]);
    

    const addEntry = (name, score) => {
        const newEntry = { name, score };
        setLeaderboardData([...leaderboardData, newEntry]);
      };

   leaderboardData.sort((a, b) => b.score - a.score);
      return (
        <div className="container">
      <h1>Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="newEntry">Add a New Entry</h2>
      <AddEntryForm addEntry={addEntry} />
    </div>
  
      );
      
      function AddEntryForm({ addEntry }) {
        const [name, setName] = useState('');
        const [score, setScore] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (name.trim() !== '' && !isNaN(score)) {
            addEntry(name, parseInt(score));
            setName('');
            setScore('');
          }
        };
      
        return (
         <form onSubmit={handleSubmit} className="add-entry-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="score">Score:</label>
            <input
              type="number"
              id="score"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              required
            />
            <button type="submit">Add Entry</button>
          </form>
        );
    };
}
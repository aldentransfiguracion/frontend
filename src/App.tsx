import React, { useState, useEffect } from 'react';
import './App.css';

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function App() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await fetch('teams.json');
      const data = await response.json();
      setTeams(data.teams);
    } catch (error) {
      console.log('Error fetching teams:', error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>March Madness College Basketball Teams</h1>
      </header>
      <div className="team-list">
        {teams.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
      </div>
    </div>
  );
}

function TeamCard({ team }: { team: Team }) {
  return (
    <div className="team-card">
      <h2>{team.school}</h2>
      <p>Mascot: {team.name}</p>
      <p>
        {team.city}, {team.state}
      </p>
    </div>
  );
}

export default App;

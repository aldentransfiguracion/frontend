import React from 'react';
import './App.css';
const sport = require('./teams.json');

interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Title() {
  return (
    <div className="title">
      <h1>Welcome to College Basketball Teams</h1>
      <p>Explore the teams competing in college basketball</p>
    </div>
  );
}

class TeamCard extends React.Component<Team> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-card">
        <h2>{oneTeam.school}</h2>
        <p>Mascot: {oneTeam.name}</p>
        <p>City: {oneTeam.city}</p>
        <p>State: {oneTeam.state}</p>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="team-list">
      {sport.teams.map((TeamNum: Team) => (
        <TeamCard key={TeamNum.tid} {...TeamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Title />
      <TeamList />
    </div>
  );
}

export default App;

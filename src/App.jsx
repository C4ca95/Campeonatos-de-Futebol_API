import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPrincipal from './components/MenuPrincipal';
import GetAllLeagues from './components/GetAllLeagues';
import GetLeagueById from './components/GetLeagueById';
import UpdateLeague from './components/UpdateLeague';
import CreateLeague from './components/CreateLeague';
import DeleteLeague from './components/DeleteLeague';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <Router>
      <MenuPrincipal />
      <Routes>
        <Route path="/get-all-leagues" element={<GetAllLeagues />} />
        <Route path="/get-league-by-id" element={<GetLeagueById />} />
        <Route path="/update-league" element={<UpdateLeague />} />
        <Route path="/create-league" element={<CreateLeague />} />
        <Route path="/delete-league" element={<DeleteLeague />} />
      </Routes>
    </Router>
  );
};

export default App;

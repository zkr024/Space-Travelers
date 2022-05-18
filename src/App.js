import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import MyProfile from './components/MyProfile/MyProfile';

import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my_profile" element={<MyProfile />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

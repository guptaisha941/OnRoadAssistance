import Login from './components/Login'

import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/login" element={<Login />} />
    </Routes>,
    <div>
      <Navbar />

    </div>
  );
}

export default App;
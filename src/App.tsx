import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import MenetrendForm from './components/MenetrendForm';
import MenetrenList from './components/MenetrenList';



const App: React.FC = () => {
  const [reload, setReload] = useState<boolean>(false); 

  return (
    <Router>
      <div className='container d-flex flex-column align-items-center'>
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top"> 
          <div className="navbar-nav">
            <Link to="/" className="nav-link">Menetrend Lista</Link>
            <Link to="/add" className="nav-link">Menetrend Hozzáadása</Link>
          </div>
        </nav>
        <div className="mt-5"> 
          <Routes>
            <Route path="/add" element={<MenetrendForm onReload={() => setReload(!reload)} />} />
            <Route path="/" element={<MenetrenList reload={reload} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};


export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

import Home from "./components/Home.jsx";
import User from "./components/User.jsx";
import News from "./components/News.jsx";
import Units from "./components/Units.jsx";
import Billing from "./components/Billing.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <div>
    <div className="navbar-container">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img
            src="https://i.pinimg.com/474x/86/6c/6d/866c6d0970f75c089c4dd244e465de21.jpg"
            alt="Wattpad Logo"
            className="logo"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/units">
                Units
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/billing">
                Billing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/units' element={<Units/>}/>
        <Route path='/billing' element={<Billing/>}/>
        
      </Routes>
    </div>
  </Router>
  </>
  )
}

export default App

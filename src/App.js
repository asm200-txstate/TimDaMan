import Game from './components/Game/Game'
import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard/LeaderBoard'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/NavBar'
import PageNotFound from './components/Error/Error404'
import {Route, Routes } from "react-router-dom"
import './App.css'
import Settings from './components/SelectField/Settings'
import CheckQuiz from './components/SelectField/CheckQuiz'

import Wordle from './components/Wordle'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/checkquiz" element={<CheckQuiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/wordle" element={<Wordle/>} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App

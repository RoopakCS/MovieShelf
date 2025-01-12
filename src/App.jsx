import NavBar from "./components/NavBar"
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import "./css/App.css"
import { MovieProvider } from "./contexts/MovieContext"


function App() {
  return(
    <>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/favorite" element={<Favorites />}/>
          </Routes>
        </main>
      </MovieProvider>
    </>
  )
}

export default App
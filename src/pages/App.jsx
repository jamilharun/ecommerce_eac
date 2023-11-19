
import Categories from "../objects/categories"
import NavBar from "../objects/navBar"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Welcome from "./Welcome";
import Profile from "../components/Profile";


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Welcome/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App

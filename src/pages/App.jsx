
import Categories from "../objects/categories"
import NavBar from "../objects/navBar"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Welcome from "./Welcome";
import { UserProvider } from "../components/UserProvider";


function App() {
  
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route index path="/" element={<Welcome/>}/>


            <Route path="/home" element={<Home/>}/>
            {/* <Route path="/profile" element={<Profile/>}/> */}

          </Routes>
        </Router>
      </UserProvider>
    </>
  )
}

export default App

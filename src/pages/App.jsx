
import Categories from "../objects/categories"
import NavBar from "../objects/navBar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Welcome from "./Welcome";
import { UserProvider } from "../components/UserProvider";
import ProductPage from "./ProductPage";


function App() {
  
  return (
    <>
      <UserProvider>

        {/* <Welcome/> */}
        <Router>
          <Routes>
            <Route index path="/" element={<Welcome/>}/>
            <Route path="/main/*" element={<NavBar/>} />
              {/* <Route path="home" element={<Categories/>}/> 
              <Route path="productPage" element={<ProductPage/>}/> */}
            
          </Routes>
        </Router>
      </UserProvider>
    </>
  )
}

export default App

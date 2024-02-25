
// import NavBar from "../objects/navBar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Welcome from "./Welcome";
import { UserProvider } from "../components/UserProvider";
import PurchaseHistory from "./PurchaseHistory"; 
import ProductPage from "./ProductPage";
import NavBar from "../objects/NavBar";



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
            <Route path="/main/purchase-history" element={<PurchaseHistory />} /> 
          </Routes>
        </Router>
      </UserProvider>
    </>
  )
}

export default App

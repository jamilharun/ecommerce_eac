
import Categories from "../objects/categories"
import NavBar from "../objects/navBar"

function App() {
  

  return (
    <>
      <section className="bg-red-LightApricot h-screen w-full">
        <NavBar/>
        <div className=" mx-48 ">
          <Categories/>
          <div></div>
        </div>
      </section>
    </>
  )
}

export default App

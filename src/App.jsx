import { useState } from "react"
import Categories from "./components/Categories"

function App() {
  const [categories, setCategories] = useState(["Dragon Ball","One Piece","Spiderman","Fast&Furious"])

  return (
    <div className="ms-5 mt-5 me-5">
      <h3>GIF DEMO APP</h3>
      <hr />
      <Categories categories={categories}
                  setCategories={setCategories} />
      <hr />
    </div>
  )
}

export default App

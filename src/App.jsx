import { useState } from "react"

function App() {
  const [categories, setCategories] = useState(["Dragon Ball","One Piece"])

  return (
    <>
      <div className="ms-5 mt-5 me-5">
        <h3>GIF DEMO APP</h3>
        <hr />
        <input type="text" placeholder="Search term" />
        <button type="button" className="btn btn-outline-primary btn-sm ms-2">Search</button>
        <br />
        {
          categories.map((category) => (
            <li key={category}>
              {category}
            </li>
          ))
        }
      </div>
    </>
  )
}

export default App

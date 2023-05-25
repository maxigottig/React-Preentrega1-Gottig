import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>

        </header>
      </div>
      <NavBar>

      </NavBar>
      <h1>Ecommerce en construcción</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Próximamente se subirán productos :)
        </p>
      </div>
    </>
  )
}

export default App

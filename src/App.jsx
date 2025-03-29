import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import portfoliopic from './assets/portfolio_myphoto.heic'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hisamu Gomi</h1>
      <p className="read-the-docs">
        Hello, this is the portfolio site of Hisamu Gomi.
        I am an international student from Japan at the university of Lethbridge.
        Majoring Psychology, interested in social change through technology.
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          click me
        </button>
        <p>
          Clicked {count} times
        </p>
      </div>
      </p>
    </>
  )
}

export default App

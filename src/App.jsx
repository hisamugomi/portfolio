import { useState } from 'react'
import reactLogo from './assets/react.svg'
import portfoliopic from '/Portfolioimage.png'

import advofu from './assets/portfoliopictureadvocacyofunderstanding.jpg'
import './App.css'
import { div } from 'three/tsl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hisamu Gomi</title>
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    </head>
      <div>
        {/* <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a>
          <img src={portfoliopic} className="logo portfolio" alt="Portfolio logo" />
          </a>
           */}
          
          </div>
          <div classcame='nameletters' >
          <c>H</c>
          <c>i</c>
          <c>s</c>
          <c>a</c>
          <c>m</c>
          <c>u</c>
          <a> </a>
          <c>G</c>
          <c>o</c>
          <c>m</c>
          <c>i</c>
          </div>
      <p className="read-the-docs">
        Hello, this is the portfolio site of Hisamu Gomi.
        I am an international student from Japan at the university of Lethbridge.
        Majoring Psychology, interested in social change through technology.
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          click me
        </button>
        <div></div>
        <a>
          Clicked {count} times
        </a> </div>
          <div>my linktree</div>
        <a href="https://linktr.ee/advocacyofunderstanding" className='logo'>
          
          <img src={advofu} className="logo" />
        </a>
      </p>
      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import codeWarsLogo from './assets/cw-logo.svg'
import fatchildLogo from './assets/8bitpix.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://github.com/fatchild/codewars-stats" target="_blank">
          <img src={fatchildLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.codewars.com/" target="_blank">
          <img src={codeWarsLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Codewars stats</h1>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </div>
  )
}

export default App

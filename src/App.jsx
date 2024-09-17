import { useState } from 'react'
import img from './assets/images/fondo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src={img} className="logo react" alt="React logo" />
      <Header />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Balsolac</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

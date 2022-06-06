import { useState } from 'react'
// import './App.css'
import Example from './Components/Example'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Example></Example>
     
    </div>
  )
}

export default App

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Layout/Header/Header'
import Layout from './components/Layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>hiddd</p>
      <Layout />
      <p>hi</p>
    </div>
    
  )
}

export default App

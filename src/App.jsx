import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Nav/>
            <div className="gradient bg-gradient-to-tl from-pink-200 via-gray-200 to-blue-200 via-opacity-0 filter blur-3xl absolute top-32 left-0 w-full h-[80vh]"></div>
    
    <Hero/>
    </div>
  )
}

export default App

import { useState } from 'react'
import Die from "./Die.jsx"

function App() {
  return (
    <main>
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                <Die n="1" />
                <Die n="2" />
                <Die n="6" />
                <Die n="5" />
                <Die n="4" />
                <Die n="2" />
                <Die n="2" />
                <Die n="3" />
                <Die n="2" />
                <Die n="5" />  
            </div>
            <button className="roll-dice">Roll</button>
        </main>
  )
}

export default App

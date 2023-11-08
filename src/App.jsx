import { useState } from 'react'
import { nanoid } from 'nanoid'
import Die from "./Die.jsx"

function App() {

  const [dice, setDice] = useState(allNewDice())
    
  function allNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          newDice.push(Math.ceil(Math.random() * 6))
      }
      return newDice
  }
  
  function rollDice() {
      setDice(allNewDice())
  }
  
  const diceElements = dice.map((die, i) => <Die n={die} key={i}/>)

  return (
    <main>
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements} 
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
  )
}

export default App

import React, { useState } from 'react'
import ShowTotal from './ShowTotal'
import Options from './Options'
import Play from './Play'
import GameRules from './GameRules'
const Game = () => {
  const [score, setScore] = useState(0)
  const [actualNumber, setActualNum] = useState(null)
  const [attempt, setAttempt] = useState(3) 
  const [showRules , setShowRules] = useState(false)

  const getRandomNumber = (num) => {
    if (num == actualNumber) {
      setScore(score + 1)
      setAttempt(attempt + 1) 
    } else {
      if (attempt <= 1) {
        setScore(score - 1)
        setAttempt(3) 
      } else {
        setAttempt(attempt - 1) 
      }
    }
  }

  return (
    <div className='flex flex-col gap-12 p-2'>
      <div className='flex gap-4 items-center justify-between p-2'>
        <ShowTotal score={score} />
        <Options setActualNumber={setActualNum} actualNumber={actualNumber} />
      </div>
        <div className='flex items-center'>
        <span className='text-xl text-center font-semibold text-deep-navy-blue'>Attempts remaining: {attempt}</span>
      </div>
      <Play getRandomNumber={getRandomNumber} setScore={setScore} setActualNumber={setActualNum} actualNumber={actualNumber} setShowRules={setShowRules} />
      { showRules && <GameRules setShowRules={setShowRules} />}
    </div>
  )
}

export default Game

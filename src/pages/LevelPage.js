import React from 'react'
import Puzzle from '../components/Puzzle'
import level1 from '../assets/images/nivel1.jpg'

// function(){
//   console.log('lo hizo');
// }
export default function LevelPage() {
  return (
    <div>
      <h1>asd</h1>
      <Puzzle image={level1} onDone={console.log('lo hizo')} />
    </div>
  )
}

import { useState } from 'react'
import './App.css'


function App() {
  const [redLight,redLightOn] = useState(true)
  const [yellowLight,yellowLightOn] = useState(true)
  const [greenLight,greenLightOn] = useState(true)

  function RedLight(){
    return redLight ? (
        <div onClick={() => {
          redLightOn(false)
          yellowLightOn(true)
          greenLightOn(true)
        }} className="red"></div>
    ) : (
        <div onClick={() => {
          redLightOn(true)
          greenLightOn(true)
          yellowLightOn(true)
        }} className="redOn"></div>
    )
  }

  function YellowLight(){
    return yellowLight ? (
        <div onClick={() => {
          yellowLightOn(false)
          redLightOn(true)
          greenLightOn(true)
        }} className="yellow"></div>
    ) : (
        <div onClick={() => {
          yellowLightOn(true)
          redLightOn(true)
          greenLightOn(true)
        }} className="yellowOn"></div>
    )
  }

  function GreenLight(){
    return greenLight ? (
        <div onClick={() => {
          greenLightOn(false)
          yellowLightOn(true)
          redLightOn(true)
        }} className="green"></div>
    ) : (
        <div onClick={() => {
          greenLightOn(true)
          yellowLightOn(true)
          redLightOn(true)
        }} className="greenOn"></div>
    )
  }


  return (
    <div className="trafficLight">
      <div className='palito'></div>
      {RedLight()}
      {YellowLight()}
      {GreenLight()}
    </div>
  )
}

export default App

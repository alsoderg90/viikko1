import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = bad + neutral + good

  const clickGood = () => {
    setGood(good + 1)
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const clickBad = () => {
    setBad(bad + 1)
  }

  const Statistics = (props) => {
    return (
    <p> {props.text} {props.value}</p>
    )
  } 

  const Button = ({onClick, text}) => (
    <button onClick={onClick}> 
    {text}
    </button>
  )

  return (
    <div>
      <h1>give feedback</h1>
        <Button onClick={clickGood} text='good'/>
        <Button onClick={clickNeutral} text='neutral'/>
        <Button onClick={clickBad} text='bad'/>
      <h1>statistics</h1>
        <Statistics text='good' value={good} />
        <Statistics text='neutral' value={neutral} />
        <Statistics text='bad' value={bad} />
      <p>all {total} </p>
      <p> average {(good*1 + neutral*0 + bad*-1)/(total)} </p>
      <p> positive {(good / total *100)} %</p>

      
    </div>
  )
}




ReactDOM.render(<App />, 
  document.getElementById('root')
)
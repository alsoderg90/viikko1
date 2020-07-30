import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {
  if (props.allClicks === 0) {
    return (
      <div>
      no feedback given
      </div>
    )
  }

  return (
    <div>
    <Statistics value={[props.value[0], props.value[1] , props.value[2], props.value[3]]}/>
    </div>
  )
}

const Statistics = (props) => {
  return ( 
  <table>
  <tbody>
  <StatisticLine text="good" value ={props.value[0]} />
  <StatisticLine text="neutral" value ={props.value[1]} />
  <StatisticLine text="bad" value ={props.value[2]} />
  <StatisticLine text="all" value ={props.value[3]} />
  <StatisticLine text="average" value ={(props.value[0]*1 + props.value[1]*0 + props.value[2]*-1)/(props.value[3])} />
  <StatisticLine text="positive" value ={(props.value[0]/ props.value[3] *100) + ' %'} />
  </tbody>
  
  </table>
  )
}

const StatisticLine = (props) => {
  return (
  <tr><td>{props.text}</td><td>{props.value}</td>
  </tr>

  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}> 
  {text}
  </button>
)


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

  return (
    <div>
      <h1>give feedback</h1>
        <Button onClick={clickGood} text='good'/>
        <Button onClick={clickNeutral} text='neutral'/>
        <Button onClick={clickBad} text='bad'/>
        <h1>statistics</h1> 
        <History allClicks={total} value={[good, neutral, bad, total]}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
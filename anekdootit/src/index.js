import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
< button onClick={onClick}>
  {text}
</button>
)

const newArray = (votes, selected) => {
  const copy = [...votes];
  copy[selected] += 1;
  return copy;
}

const topVote = (votes) => {
  return votes.indexOf(Math.max(...votes))
}

const Anecdote = ({anecdote, votes}) => {
  return (
  <p>"{anecdote}". has {votes} votes</p>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Anecdote anecdote={props.anecdotes[selected]} votes={votes[selected]}/>
      <Button onClick={() => setVotes(newArray(votes, selected))} text="vote"/>
      <Button onClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={props.anecdotes[topVote(votes)]} votes={Math.max(...votes)}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
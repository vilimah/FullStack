import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const all = good + bad + neutral
  console.log('all', all)
  const avg = (good * 1 + neutral * 0 + bad * (-1)) / all
  console.log('average', avg)
  const pos = (good / all)* 100
  console.log('positive', pos)
  if (all == 0) {
    return <p>
      No feedback given
    </p>
  }
  
  return (
    <table>
    <tbody>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={all}/>
      <StatisticLine text="average" value={avg.toFixed(2)}/>
      <StatisticLine text="positive" value={`${pos.toFixed(2)} %`}/>
    </tbody>
    </table>
  )
}

const Button = ({ onClick, text}) => {
  return <button onClick={onClick}>{text}</button>
}
  


const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  console.log('good', good)
  const [neutral, setNeutral] = useState(0)
  console.log('neutral', neutral)
  const [bad, setBad] = useState(0)
  console.log('bad', bad)
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good+1)} text='good'/>
      <Button onClick={() => setNeutral(neutral+1)} text='neutral'/>
      <Button onClick={() => setBad(bad+1)} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      

    </div>
  )
}

export default App
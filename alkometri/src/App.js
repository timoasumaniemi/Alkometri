
import './App.css';
import { useState } from 'react'
import axios from 'axios'

function App() {

  return (
    <>
      <Header header="Hello Alkometri" />
      <Content />
    </>
  )
}

function Header(props) {
  return (
    <header className="App-header">
      <h1>{props.header}</h1>
    </header>
  )
}

function Content() {
  const [gender, setGender] = useState("")
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [weight, setWeight] = useState(0)
  const [result, setResult] = useState(0)
  const [data, setData] = useState({
    bottles: 2, time: 3, weight: 4, gender: ""
  })

  const onSubmit = (event) => {
    event.preventDefault()

    data.bottles = bottles
    data.time = time
    data.weight = weight
    data.gender = gender

    setData({
      bottles: bottles,
      time: time,
      weight: weight,
      gender: gender
    })

    axios.post(
      "http://localhost:3001/api",
      data,
      { headers: "Content-type: application/json" },)
      .then((response) => {
        setResult(response.data.result)
      })
  }

  return (
    <div>
      <div className="Content-container">
        <label htmlFor="weight-input">Weight:</label>
        <input className="Big-input" type="number" id="weight-input" min="0" onChange={(e) => { setWeight(e.target.value) }}></input>
      </div>
      <div className="Content-container">
        <label htmlFor="bottles-input">Bottles:</label>
        <input className="Small-input" type="number" min="0" id="bottles-input" onChange={(e) => { setBottles(e.target.value) }}></input>
      </div>
      <div className="Content-container">
        <label htmlFor="time-input">Time:</label>
        <input className="Small-input" type="number" min="0" id="time-input" onChange={(e) => { setTime(e.target.value) }} ></input>
      </div>

      <div className="Content-container">

        <form onSubmit={onSubmit}>
          <p>Gender:</p>
          <input
            type="radio"
            id="male-selector"
            name="genderSelector"
            onChange={(e) => setGender("male")}></input>
          <label htmlFor="male-selector">Male</label><br />

          <input
            type="radio"
            id="female-selector"
            name="genderSelector"
            onChange={(e) => setGender("female")}></input>
          <label htmlFor="female-selector">Female</label><br />

          <input type="submit"></input>

          <output>{result.toFixed(2)}</output>
        </form>

      </div>
    </div>
  )
}
export default App;

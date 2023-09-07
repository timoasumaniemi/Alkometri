
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
  const [progress, setProgress] = useState("")
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const [data, setData] = useState({
    bottles: 0, time: 0, weight: 0, gender: "male"
  })

  const setGenderValue = (props) => {
    setGender(props)
    setSubmitDisabled(false)
  }

  const calculateLocally = () => {
    var alcoholLevel = 0
    const litres = data.bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = data.weight * 0.1
    const gramsLeft = grams - (burning * data.time)

    if (data.gender === "male") {
      alcoholLevel = gramsLeft / (data.weight * 0.7)
    }
    if (data.gender === "female") {
      alcoholLevel = gramsLeft / (data.weight * 0.6)
    }

    setResult(alcoholLevel)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setProgress("calculating")

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

    if (data.bottles === 0 || data.weight === 0 || data.time === 0) {
      alert("Set values above zero")
      setProgress("")
      return
    }

    setSubmitDisabled(true)

    axios.post(
      "http://localhost:3001/api",
      data,
      { headers: "Content-type: application/json" },)
      .then((response) => {
        setResult(response.data.result)
        setProgress("")
        setSubmitDisabled(false)
      })
      .catch((err) => {
        calculateLocally()
        setProgress("")
        setSubmitDisabled(false)
      })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>

        <div className="Content-container">
          <label htmlFor="weight-input">Weight:</label>
          <input
            className="Big-input"
            type="number"
            defaultValue={data.weight}
            id="weight-input"
            min="0"
            onChange={(e) => { setWeight(e.target.value) }} />
        </div>
        <div className="Content-container">
          <label htmlFor="bottles-input">Bottles:</label>
          <input
            className="Small-input"
            type="number"
            defaultValue={data.bottles}
            id="bottles-input"
            min="0"
            onChange={(e) => { setBottles(e.target.value) }}></input>
        </div>
        <div className="Content-container">
          <label htmlFor="time-input">Time:</label>
          <input
            className="Small-input"
            type="number"
            defaultValue={data.time}
            id="time-input"
            min="0"
            onChange={(e) => { setTime(e.target.value) }} ></input>
        </div>

        <div className="Content-container">
          <p>Gender:</p>
          <input
            type="radio"
            id="male-selector"
            name="genderSelector"
            onChange={(e) => (
              setGenderValue("male")
            )}>
          </input>
          <label htmlFor="male-selector">Male</label><br />
          <input
            type="radio"
            id="female-selector"
            name="genderSelector"
            onChange={(e) => (
              setGenderValue("female"))}>
          </input>
          <label htmlFor="female-selector">Female</label><br />

          <input disabled={submitDisabled} id="submit-button" type="submit"></input>
          <br></br>
          <output id="result">{result.toFixed(2)}</output>
          <br></br>
          <p>{progress}</p>
        </div>
      </form>
    </div>
  )
}
export default App;

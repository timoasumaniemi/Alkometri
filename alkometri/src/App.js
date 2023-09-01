import './App.css';

function App() {
  return(
    <>
      <Header header="Hello Alkometri"/>
        <Content />
    </>
  )
}

function Header(props){
  return(
    <header className="App-header">
    <h1>{props.header}</h1>
    </header>
  )
}

function Content(){
  return(
    <div>
        <div className="Content-container">
          <label for="weight-input">Weight:</label>
          <input id="weight-input"></input>
        </div>
        <div className="Content-container">
          <label for="bottles-input">Bottles:</label>
          <input id="bottles-input"></input>
      </div>
    </div>
  )
}
export default App;

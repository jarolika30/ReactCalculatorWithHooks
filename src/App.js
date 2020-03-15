import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const btns = [];
  ["7","8","9","+","4","5","6","-","1","2","3","/","0",".","*"].forEach(item => {
    btns.push(<input 
      onClick={e=>{setInput(input + e.target.value);}}
      className="button" type="button" value={item} key={item}/>);
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="heading">React App</h1>
      </header>
      <main className="main">
        <form className="form" name="calculator" method="POST" action="#">
          <h2 className="heading-2">Calculator</h2>
          <div className="container">
            <input className="output" type="textbox" id="display" value={input} readonly />
            <div className="buttons">
              {btns}
              <input 
                onClick={e => {
                  try {
                    setInput(String(eval(input)).length > 3 &&
                    String(eval(input)).includes(".")
                    ? String(eval(input).toFixed(4))
                    : String(eval(input)));
                  } catch (e) {
                    console.log(e);
                  }
                }}
                className="button enter" type="button" value="="/>
            </div>
          </div>
        </form>
        <button className="clear" onClick={() => setInput(input.substr(0, input.length - 1))}>
            Clear
        </button>
      </main>
    </div>
  );
}

export default App;

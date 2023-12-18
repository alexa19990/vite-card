import "./App.css";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState('')
  const [info, setInfo] = useState({
    name: name,
    number: number,
  });

  const [display, setDisplay] = useState(false);

  const getName = (e) => {
    setName(e.target.value);
  };

  const getNumber = (e) => {
    setNumber(e.target.value);
  };

  console.log

  const clickHandler = () => {

    if(name=='' || number==''){
      window.alert('please fill fields')
    }else if(parseInt(isNaN(number))){
      window.alert('number should be all digits')
    }else{
      setInfo({
        name: name,
        number: number,
      });
      setDisplay(!display)
    }
  };

  return (
    <div className="container">
      <div className="gradient-side"></div>
      <FrontCard info={info} />
      <BackCard />
      {!display && (
        <>
          <div className="input-side">
            <div className="input-boxName">
              <p>cardholder name</p>
              <input type="text" onChange={(e) => getName(e)} />
            </div>
            <div className="input-boxNumber">
              <p>card number</p>
              <input type="text" onChange={(e) => getNumber(e)} />
            </div>
            <div className="input-boxInfo">
              <div className="info1">
                <p>exp. date (mm/yy)</p>
                <div className="info1-child">
                  <input type="text" placeholder="MM" />
                  <input type="text" placeholder="YY" />
                </div>
              </div>
              <div className="info2">
                <p>cvc</p>
                <input type="text" placeholder="e.g 123" />
              </div>
            </div>
            <button className="confirm" onClick={clickHandler}>
              Confirm
            </button>
          </div>
        </>
      )}
      {display && <h1 style={{position:"absolute", right: '400px', top: '400px'}}>Done</h1>}
    </div>
  );
};

export default App;

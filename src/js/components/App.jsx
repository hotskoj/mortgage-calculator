import React, { useState } from "react";
import Form from "./Form";
import Output from "./Output";

export default function App(){
  const [output, setOutput] = useState("0");
  const [isHidden, setIsHidden] = useState(true);

  function calcMonthlyPayment(parameters) {
    let balance = parseFloat(parameters.balance);
    let rate = (parseFloat(parameters.rate) / 100) / 12;
    let term = parseFloat(parameters.term);
    let m = balance * ((rate * ((1 + rate)**(12 * term))) / (((1 + rate)**(12 * term)) - 1));
    setOutput(m.toFixed(2));
    setIsHidden(false);
  }

    return (
        <div >
            <h1>Mortgage Calculator</h1>
            <Form onCalc={calcMonthlyPayment} />
            <Output output={output} isHidden={isHidden}/>
        </div>
    );
}
import React from 'react'

const AmazingNumberButton = (props) => {
  return (
    <>
      {/* <button class="calc-button C">C</button> */}
      <button className="calc-button sept" id='7'  onClick={props.operator}>7</button>
      <button className="calc-button huit" id='8'  onClick={props.operator}>8</button>
      <button className="calc-button neuf" id='9'  onClick={props.operator}>9</button>
      <button className="calc-button quatre" id='4'  onClick={props.operator}>4</button>
      <button className="calc-button cinq" id='5'  onClick={props.operator}>5</button>
      <button className="calc-button six" id='6'  onClick={props.operator}>6</button>
      <button className="calc-button un" id='1'  onClick={props.operator}>1</button>
      <button className="calc-button deux" id='2'  onClick={props.operator}>2</button>
      <button className="calc-button trois" id='3'  onClick={props.operator}>3</button>
      <button className="calc-button virgule" id='.'  onClick={props.operator}>,</button>
      <button className="calc-button zero" id='0'  onClick={props.operator}>0</button>
    </>
  );
}

export default AmazingNumberButton;
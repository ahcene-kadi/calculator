import React from 'react';


const GreatOperationButton = (props) => {
  return (
    <>
      <button className="calc-button division" id='/' onClick={props.operator}>/</button>
      <button className="calc-button multiplication" id='*' onClick={props.operator}>*</button>
      <button className="calc-button plus" id='+' onClick={props.operator}>+</button>
      <button className="calc-button moins" id='-' onClick={props.operator}>-</button>
    </>
  );
}

export default GreatOperationButton;
import React from 'react'

function BeautifullScreen(props) {
  return (
    <div className="BeautifullScreen">
      <input value={props.valeur}/>
      <input value={props.resultat}/>
    </div>
  );
}

export default BeautifullScreen;
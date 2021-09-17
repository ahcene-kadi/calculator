/* eslint-disable no-eval */

import TheTitle from './TheTitle';
import IsOverNineThousend from "./IsOverNineThousend";
import BeautifullScreen from './BeautifullScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import AmazingNumberButton from './AmazingNumberButton';
import { useState } from 'react';
import React from 'react';


const Calculator = () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");


    const calculette = function (e) {
        setValue(value + e.target.id);
    };

    const resultats = function () {
        setResult(eval(value));
    };

    return (
        <React.Fragment>
            <TheTitle title='Calculator9000' />
            <div className='calculator'>
                <IsOverNineThousend ninethousend={result} />
                <BeautifullScreen valeur={value} resultat={result} />
                <div className='opp'>
                <GreatOperationButton operator={calculette} />
                </div>
                <div className='buttons'>
                    <AmazingNumberButton operator={calculette} />
                    <MagnificientEqualButton rend={resultats} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Calculator;
import React, { useState } from 'react';
import Laske from './Laske';
import './Syote.css';

const Syote = () => {
    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();

    return (
        <div className="Syote">
            <div className="input-container">
                <input type="number" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} />
                <input type="number" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)} />
                
                <Laske firstNumber={firstNumber} secondNumber={secondNumber} />
            </div>
        </div>
    );
}

export default Syote;
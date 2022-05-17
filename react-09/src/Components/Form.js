import { useState } from 'react';
import Button from './Button';
import './Form.css';

const Form = () => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [thirdNumber, setThirdNumber] = useState(0);

    const hyvaa = () => setFirstNumber(firstNumber + 1);
    const kohtalaista = () => setSecondNumber(secondNumber + 1);
    const huonoa = () => setThirdNumber(thirdNumber + 1);

    return (
        <div className="Form">
            <h1 className="header">Ravintola palaute</h1>
            <p>Onko palvelumme ravintolassa ollut mielestäsi:</p>

            <Button otsikko="Hyvää" toiminto={hyvaa} />
            <Button otsikko="Kohtalaista" toiminto={kohtalaista} />
            <Button otsikko="Huonoa" toiminto={huonoa} />

            <h1>Palautteiden tilastotiedot</h1>
            <p>Hyvää: {firstNumber}</p>
            <p>Kohtalaista: {secondNumber}</p>
            <p>Huonoa: {thirdNumber}</p>
            <p>Palautemäärä: {firstNumber + secondNumber + thirdNumber}</p>
            <p>Keskiarvo: {((firstNumber + secondNumber + thirdNumber) / 3).toFixed(2)}</p>
            <p>Positiivinen palaute: {(firstNumber / (firstNumber + secondNumber + thirdNumber) * 100).toFixed(1)}%</p>
        </div>
    );
}

export default Form;
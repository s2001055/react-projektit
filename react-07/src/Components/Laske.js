const Laske = ({ firstNumber, secondNumber }) => {
    const getResult = (number1, number2) => {
        let result;

        for (let i = 1; i <= number1 && i <= number2; i++) {
            if (number1 % i === 0 && number2 % i === 0) {
                result = i;
            }
        }

        return result;
    }

    return (
        <div className="Laske">
            <span>Vastaus: {getResult(firstNumber, secondNumber)}</span>
        </div>
    );
}

export default Laske;
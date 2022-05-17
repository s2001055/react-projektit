import './Button.css';

const Button = ({ otsikko, toiminto }) => {
    return (
        <button onClick={toiminto}>{otsikko}</button>
    );
}

export default Button;
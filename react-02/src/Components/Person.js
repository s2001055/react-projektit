import './Person.css';

const Person = ({ name, age }) => {
    return (
        <div className="Person">
            <p>Hei, nimeni on {name} ja olen {age}-vuotias.</p>
        </div>
    );
}

export default Person;
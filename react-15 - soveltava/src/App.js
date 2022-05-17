import { useState } from 'react';
import InputField from './Components/InputField';
import PersonForm from './Components/PersonForm';
import Person from './Components/Person';
import './App.css';

const App = (props) => {
    const [persons, setPersons] = useState(props.persons);
    const [newPerson, setNewPerson] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [showFilter, setFilter] = useState('');
    const [showAll, setShowAll] = useState(true);

    const handlePersonChange = (event) => {
        setNewPerson(event.target.value);
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    }

    const handleFilterChange = (event) => {
        if (event.target.value === '') {
            setShowAll(true);
        } else {
            setShowAll(false);
        }

        setFilter(event.target.value);
    }

    const addPerson = (event) => {
        event.preventDefault();

        persons.map(person => {
            if (newPerson === person.name) {
                return alert(`${newPerson} is already exists in phonebook!`);
            }
        });

        const personObject = {
            id: persons.length + 1,
            name: newPerson,
            number: newNumber
        }

        setPersons(persons.concat(personObject));
        setNewPerson('');
        setNewNumber('');
    }

    const personsToShow = showAll ? persons : persons.filter((person) => person.name.toLowerCase().includes(showFilter));

    return (
        <div className="App">
            <h1>Phonebook</h1>

            <InputField filterChange={handleFilterChange} />
            <PersonForm addPerson={addPerson} newPerson={newPerson} newNumber={newNumber} personChange={handlePersonChange} numberChange={handleNumberChange} />
            <Person personsToShow={personsToShow} />
        </div>
    );
}

export default App;
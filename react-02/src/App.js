import Person from './Components/Person';
import './App.css';

const App = () => {
    const persons = [
        { name: 'Matti', age: 30 },
        { name: 'Antti', age: 42 },
        { name: 'Kalle', age: 22 }
    ];

    return (
        <div className="App">
            <Person name={persons[0].name} age={persons[0].age} />
            <Person name={persons[1].name} age={persons[1].age} />
            <Person name={persons[2].name} age={persons[2].age} />
        </div>
    );
}

export default App;
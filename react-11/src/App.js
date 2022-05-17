import './App.css';

const App = () => {
    const animals = [
        { name: 'Fluffykins', species: 'rabbit' },
        { name: 'Caro', species: 'dog' },
        { name: 'Hamilton', species: 'dog' },
        { name: 'Harold', species: 'fish' },
        { name: 'Ursula', species: 'cat' },
        { name: 'Jimmy', species: 'fish' }
    ];

    const orders = [
        { product: 'apple', amount: 250 },
        { product: 'orange', amount: 400 },
        { product: 'banana', amount: 100 },
        { product: 'mango', amount: 325 }
    ];

    // let dogs = [];
    // let otherAnimals = [];
    // let allAnimals = [];
    // let totalAmount = 0;
    // let names = [];

    // for (let i = 0; i < animals.length; i++) {
    //     if (animals[i].species === 'dog') {
    //         dogs.push(animals[i]);
    //     }
    // }

    // const dogs = animals.filter((animal) => {
    //     return animal.species === 'dog';
    // });

    // for (let i = 0; i < animals.length; i++) {
    //     if (animals[i].species !== 'dog') {
    //         otherAnimals.push(animals[i]);
    //     }

    //     allAnimals.push(animals[i]);
    // }
    
    // const otherAnimals = animals.filter(animal => {
    //     return animal.species !== 'dog';
    // });

    // console.log(otherAnimals);

    // for (let i = 0; i < animals.length; i++) {
    //     names.push(animals[i].name);
    // }

    // const animalName = animals.map(animal => {
    //     names.push(animal.name);
    // });

    // for (let i = 0; i < orders.length; i++) {
    //     totalAmount += orders[i].amount
    // }

    // const ordersAmount = orders.reduce((previousValue, currentValue) => {
    //     return previousValue + currentValue.amount;
    // }, 0);

    return (
        <div className="App"></div>
    );
}

export default App;
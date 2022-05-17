const Person = ({ personsToShow }) => {
    return (
        <div className="Person">
            <h2>Contacts</h2>

            <ul>
                {personsToShow.map(person =>
                    <li>{person.name}, puh. {person.number}</li>
                )}
            </ul>
        </div>
    );
}

export default Person;
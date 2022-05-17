const PersonForm = ({ addPerson, newPerson, newNumber, personChange, numberChange }) => {
    return (
        <form onSubmit={addPerson}>
            <h1>Add new contact</h1>

            <label>Contact name</label>
            <input
                placeholder="Type a new contact name here"
                value={newPerson}
                onChange={personChange}
            />

            <label>Contact number</label>
            <input
                placeholder="Type a new contact number here"
                value={newNumber}
                onChange={numberChange}
            />

            <button type="submit">Add contact</button>
        </form>
    );
}

export default PersonForm;
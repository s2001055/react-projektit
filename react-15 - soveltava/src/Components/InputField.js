const InputField = ({ filterChange }) => {
    return (
        <div className="Filter">
            <label>Filter shown with</label>
            <input
                placeholder="Search contact"
                onChange={filterChange}
            />
        </div>
    );
}

export default InputField;
import './Total.css';

const Total = ({ course }) => {
    const total = course.parts.reduce((prevValue, curValue) => {
        return prevValue + curValue.exercises;
    }, 0);

    return (
        <div className="Total">
            <h1>Total of {total} exercises</h1>
        </div>
    );
};

export default Total;
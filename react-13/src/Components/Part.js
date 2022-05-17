import './Part.css';

const Part = ({ course }) => {
    return (
        <div className="Part">
            {course.parts.map(part =>
                <div>
                    <label>{part.name} {part.exercises}</label>
                    <p>Part toimii.</p>
                </div>
            )}
        </div>
    );
}

export default Part;
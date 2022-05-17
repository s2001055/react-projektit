import Header from './Header';
import Total from './Total';

const Course = ({ course }) => {
    return (
        <div className="Course">
            <p>Course toimii.</p>
            <Header course={course} />
            <Total course={course} />
        </div>
    );
}

export default Course;
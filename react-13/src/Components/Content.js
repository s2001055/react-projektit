import Part from './Part';

const Content = ({ course }) => {
    return (
        <div className="Content">
            <p>Content toimii.</p>
            <Part course={course} />
        </div>
    );
}

export default Content;
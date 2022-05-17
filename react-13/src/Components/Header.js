import Content from './Content';
import './Header.css';

const Header = ({ course }) => {
    return (
        <div className="Header">
            <p>Header toimii.</p>
            <h1>{course.name}</h1>
            <Content course={course} />
        </div>
    );
}

export default Header;
import './View.css';

const View = (props) => {
    return (
        <div className="View">
            <h2>This is your input:</h2>
            <p>First name: <span className="view-label">{props.firstName}</span></p>
            <p>Last name: <span className="view-label">{props.lastName}</span></p>
            <p>Phone number: <span className="view-label">{props.phone}</span></p>
            <p>Message: <span className="view-label">{props.message}</span></p>
        </div>
    );
}

export default View;
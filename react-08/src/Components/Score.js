import './Score.css';

const Score = (props) => {
    return (
        <div className="score-container">
            {props.score}
        </div>
    );
}

export default Score;
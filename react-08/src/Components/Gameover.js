import './Gameover.css';

const Gameover = (props) => {
    const score = props.scoreCallback();

    return (
        <div className="overlay">
            <div className="gameover">
                Your score: {score}
                <button id="startgame" onClick={props.startCallback}>New Game</button>
            </div>
        </div>
    );
}

export default Gameover;
import React from 'react';
import Button from './Components/Button';
import Score from './Components/Score';
import Gameover from './Components/Gameover';
import './App.css';

const App = () => {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const state = {
        activeButton: '',
        buttonList: [],
        clicks: 0,
        showGameover: false,
        showStartgame: true
    }

    let timerId = undefined;
    let delay = 1000;

    const clickButton = (buttonId) => {
        if (!(buttonId === state.buttonList[0])) {
            gameover();
            return;
        }

        this.setState(prevState => {
            return {
                buttonList: prevState.buttonList.slice(1),
                clicks: prevState.clicks + 1
            };
        });
    }

    const gameover = () => {
        clearTimeout(timerId);

        state = {
            showGameover: true
        }
    }

    const next = () => {
        if (state.buttonList.length >= 5) {
            gameover();
            return;
        }

        let nextActive = (state.activeButton + getRandomInt(1, 3)) % 4;
        let newList = state.buttonList;

        newList.push(nextActive);

        state = {
            activeButton: nextActive,
            buttonList: newList
        }

        delay -= 10;
        timerId = setTimeout(next, delay);
    }

    const startCallback = () => {
        state = {
            buttonList: [],
            newList: [],
            clicks: 0,
            showGameover: false,
            showStartgame: false,
            activeButton: getRandomInt(0, 3)
        }

        delay = 1000;
        next();
    }

    const scoreCallback = () => {
        return state.clicks;
    }

    return (
        <div className="App">
            <Score score={state.clicks} />

            <main className="button-container">
                <Button buttonColor="blue" active={state.activeButton === 0} clickHandler={() => {clickButton(0); }} />
                <Button buttonColor="yellow" active={state.activeButton === 1} clickHandler={() => {clickButton(1); }} />
                <Button buttonColor="green" active={state.activeButton === 2} clickHandler={() => {clickButton(2); }} />
                <Button buttonColor="red" active={state.activeButton === 3} clickHandler={() => {clickButton(3); }} />

                {state.showGameover && <Gameover scoreCallback={scoreCallback} startCallback={startCallback} />}
            </main>

            {state.showStartgame && <button id="startgame" onClick={startCallback}>New Game</button>}
        </div>
    );
}

export default App;
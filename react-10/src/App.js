import React, { useState } from 'react';
import './App.css';

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ];

    const [currentIndex, setIndex] = useState();

    const randomAnecdote = () => {
        let index = Math.floor(Math.random() * anecdotes.length);
        let text = anecdotes[index];
        
        setIndex(index);
        return text;
    }

    const [anecdote, setAnecdote] = useState(randomAnecdote);
    const [votes1, setVote1] = useState(0);
    const [votes2, setVote2] = useState(0);
    const [votes3, setVote3] = useState(0);
    const [votes4, setVote4] = useState(0);
    const [votes5, setVote5] = useState(0);
    const [votes6, setVote6] = useState(0);
    const [votes7, setVote7] = useState(0);

    const setVote = () => {
        switch (currentIndex) {
            case 0:
                setVote1(votes1 + 1)
                break;
            case 1:
                setVote2(votes2 + 1)
                break;
            case 2:
                setVote3(votes3 + 1)
                break;
            case 3:
                setVote4(votes4 + 1)
                break;
            case 4:
                setVote5(votes5 + 1)
                break;
            case 5:
                setVote6(votes6 + 1)
                break;
            case 6:
                setVote7(votes7 + 1)
                break;
            default:
                break
        }
    }

    return (
        <div className="App">
            <h1>Anecdote of the day</h1>

            <div className="Anecdote">
                <p>{anecdote}</p>
            </div>

            <button onClick={() => setAnecdote(randomAnecdote)}>Random Anecdote</button>
            <button onClick={() => setVote()}>Vote</button>

            <div className="Votes">
                <p>1. {anecdotes[0]}</p>
                <p>Ääniä: {votes1}</p>

                <p>2. {anecdotes[1]}</p>
                <p>Ääniä: {votes2}</p>

                <p>3. {anecdotes[2]}</p>
                <p>Ääniä: {votes3}</p>

                <p>4. {anecdotes[3]}</p>
                <p>Ääniä: {votes4}</p>

                <p>5. {anecdotes[4]}</p>
                <p>Ääniä: {votes5}</p>

                <p>6. {anecdotes[5]}</p>
                <p>Ääniä: {votes6}</p>

                <p>7. {anecdotes[6]}</p>
                <p>Ääniä: {votes7}</p>
            </div>
        </div>
    );
}

export default App;
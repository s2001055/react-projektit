import Box from './Components/Box';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Box name="Maria" title="CEO" age="29" />
            <Box name="Kati" title="Developer" age="25" />
            <Box name="Karin" title="Designer" age="45" />
        </div>
    );
}

export default App;
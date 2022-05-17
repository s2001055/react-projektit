import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Koti from './Components/Koti';
import Kayttajat from './Components/Kayttajat';
import Tietoja from './Components/Tietoja';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Koti</Link>
                        </li>

                        <li>
                            <Link to="/tietoja">Tietoja</Link>
                        </li>

                        <li>
                            <Link to="/kayttajat">Kayttajat</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Koti />} />
                    <Route path="tietoja/*" element={<Tietoja />} />
                    <Route path="kayttajat/*" element={<Kayttajat />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
import { Routes, Route, Link } from 'react-router-dom';
import Profiili from './Profiili';

const Kayttajat = () => {
    return (
        <div className="Kayttajat">
            <nav>
                <Link to="oma">Oma profiili</Link>
            </nav>

            <Routes>
                <Route path="oma" element={<Profiili />} />
            </Routes>
        </div>
    );
}

export default Kayttajat;
import { useState } from 'react';

const Laskuri = () => {
    const [count, setCount] = useState(0);
    const lisaa = () => setCount(count + 1);
    const vahenna = () => setCount(count - 1);
    const nollaa = () => setCount(0);

    return (
        <div className="Laskuri">
            <p>Olet painanut {count} kertaa.</p>
            <button onClick={lisaa}>Lisää</button>
            <button onClick={vahenna}>Vähennä</button>
            <button onClick={nollaa}>Nollaa</button>
        </div>
    );
}

export default Laskuri;
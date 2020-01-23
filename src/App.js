import React, { useState, useEffect } from 'react';

function App() {
    const [techs, setTech] = useState([]);
    const [newTech, setNewTech] = useState('');

    function handleAddTech() {
        setTech([...techs, newTech]);
        setNewTech('');
    }

    useEffect(() => {
        const storageTechs = localStorage.getItem('techs');
        if (storageTechs) {
            setTech(JSON.parse(storageTechs));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('techs', JSON.stringify(techs));
    }, [techs]);

    return (
        <>
            <ul>
                {techs.map(tech => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newTech}
                onChange={e => setNewTech(e.target.value)}
            />
            <button type="button" onClick={handleAddTech}>
                Adicionar
            </button>
        </>
    );
}

export default App;

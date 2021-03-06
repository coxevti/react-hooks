import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
    const [techs, setTech] = useState([]);
    const [newTech, setNewTech] = useState('');

    const handleAddTech = useCallback(() => {
        setTech([...techs, newTech]);
        setNewTech('');
    }, [techs, newTech]);

    useEffect(() => {
        const storageTechs = localStorage.getItem('techs');
        if (storageTechs) {
            setTech(JSON.parse(storageTechs));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('techs', JSON.stringify(techs));
    }, [techs]);

    const techSize = useMemo(() => techs.length, [techs]);

    return (
        <>
            <ul>
                {techs.map(tech => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
            Você tem {techSize} tecnologias
            <br />
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

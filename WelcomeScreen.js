// WelcomeScreen.js
import React, { useState } from 'react';
import './styles.css';

function WelcomeScreen({ onStartGame }) {
    const [playerName, setPlayerName] = useState(''); // Estado para almacenar el nombre del jugador

    const handleStartGame = () => {
        onStartGame(playerName); // Llama a onStartGame pasando el nombre del jugador
    };

    return (
        <div>
            <h1>Bienvenido al Juego del Ahorcado</h1>
            <input
                type="text"
                placeholder="Ingresa tu nombre"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)} // Actualiza el estado con el nombre del jugador
            />
            <button onClick={handleStartGame}>Comenzar Juego</button> {/* Inicia el juego */}
        </div>
    );
}

export default WelcomeScreen;

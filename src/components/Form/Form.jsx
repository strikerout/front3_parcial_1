import React, { useState } from 'react';
import styles from './Form.module.css';

function Form({ onFormSubmit }) {
    const [genre, setGenre] = useState('');
    const [game, setGame] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (genre === '' || game.length < 3 || imageLink === '') {
            setError('Por favor chequea que la información sea correcta.');
        } else {
            setError('');
            onFormSubmit({ genre, game, imageLink });

            // Resetear el estado
            setGenre('');
            setGame('');
            setImageLink('');
        }
    };

    return (
        <div className={styles.container}>
            <h2>Elige tu videojuego favorito</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Género favorito:</label>
                    <select value={genre} onChange={(e) => setGenre(e.target.value)} className={styles.select}>
                        <option value="">Selecciona un género</option>
                        <option value="Acción">Acción</option>
                        <option value="Aventura">Aventura</option>
                        <option value="RPG">RPG</option>
                        <option value="Estrategia">Estrategia</option>
                        <option value="Deportes">Deportes</option>
                        <option value="Simulación">Simulación</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label>Videojuego favorito:</label>
                    <input
                        type="text"
                        placeholder="Ingresa tu videojuego favorito"
                        value={game}
                        onChange={(e) => setGame(e.target.value)}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Link de la imagen:</label>
                    <input
                        type="text"
                        placeholder="Ingresa el link de una imagen"
                        value={imageLink}
                        onChange={(e) => setImageLink(e.target.value)}
                        className={styles.input}
                    />
                </div>

                <button type="submit" className={styles.button}>ENVIAR</button>
                {error && <p className={styles.error}>{error}</p>}
            </form>

        </div>
    );
}

export default Form;

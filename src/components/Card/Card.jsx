import React from 'react';
import styles from './Card.module.css';

function Card({ data }) {
  return (
    <div className={styles.card}>
      <h2>Tu género favorito es: {data.genre}</h2>
      <p>Tu videojuego favorito es: {data.game}</p>
      {data.imageLink && <img src={data.imageLink} alt={data.game} className={styles.img} />}
    </div>
  );
}

export default Card;

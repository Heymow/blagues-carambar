import React from 'react';
import styles from '../styles/JokeButton.module.css';

const JokeButton = ({ fetchJoke, loading }) => {
    return (
        <button onClick={fetchJoke} disabled={loading} className={styles.button} >
            {loading ? 'Chargement...' : 'Découvrir une blague'}
        </button>
    );
};

export default JokeButton;

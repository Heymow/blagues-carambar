import React from 'react';
import styles from '../styles/JokeDisplay.module.css';

const JokeDisplay = ({ joke }) => {
    return (
        <div className={styles.jokeDisplayContainer}>
            <p className={styles.jokeText}>{joke}</p>
        </div>
    );
};

export default JokeDisplay;

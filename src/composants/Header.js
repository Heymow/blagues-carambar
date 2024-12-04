import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="/logo.png" alt="Carambar & Co Logo" className={styles.logo} />
            <p className={styles.subtitle}>Des blagues 100% originales pour illuminer votre journée !</p>
        </header>
    );
};

export default Header;
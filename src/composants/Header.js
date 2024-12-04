import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    const imageSrc = `${process.env.PUBLIC_URL}/Logo.png`;
    return (
        <header className={styles.header}>
            <img src={imageSrc} alt="Carambar & Co Logo" className={styles.logo} />
            <p className={styles.subtitle}>Des blagues 100% originales pour illuminer votre journée !</p>
        </header>
    );
};

export default Header;
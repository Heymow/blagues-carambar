import './styles/App.css';
import React, { useState } from 'react';
import Header from './composants/Header';
import JokeDisplay from './composants/JokeDisplay';
import JokeButton from './composants/JokeButton';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRandomJoke = async () => {
    setLoading(true);
    try {
      console.log('API URL:', process.env.REACT_APP_BACKEND_URL);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jokes/random`);
      const data = await response.json();
      setTimeout(() => setJoke(data.content), 300);

    } catch (error) {
      console.error('Erreur lors de la récupération de la blague:', error);
      setJoke('Oups ! Impossible de récupérer une blague. Réessayez !');
    } finally {
      setTimeout(() => setLoading(false), 300);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <JokeButton fetchJoke={fetchRandomJoke} loading={loading} />
        <JokeDisplay joke={joke} />
      </main>
    </div>
  );
}

export default App;

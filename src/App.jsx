import './App.css';
import FortuneCookie from './components/FortuneCookie';
import Button from './components/Button';
import phrases from './data/phrases.json';
import { useState, useEffect } from 'react';
import backgroundImage1 from './images/fondo1.png';
import backgroundImage2 from './images/fondo2.png';
import backgroundImage3 from './images/fondo3.png';
import backgroundImage4 from './images/fondo4.png';

function App() {
  const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage1, backgroundImage2, backgroundImage3];
  const [index, setIndex] = useState(0);
  const currentBackground = backgrounds[index];

  const changePhrases = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setIndex(randomIndex);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setIndex(randomIndex);
  }, []);

  return (
    <div className="container">
      <div className="background" style={{ backgroundImage: `url(${currentBackground})` }}></div>
      <FortuneCookie data={phrases[index]} backgroundImg={currentBackground} />
      <Button onClick={changePhrases} />
    </div>
  );
}

export default App;

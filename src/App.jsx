import { useState, useEffect } from 'react';
import './style/main.css';
import phrases from './utils/phrases.json';
import getRandomElemArray from './utils/getRandomElemArray';
import Quote from './components/Quote';
import BtnQuote from './components/BtnQuote';
import imagenes from './utils/imagenes.json';

function App() {
  const [quote, setQuote] = useState('');
  const [image, setImage] = useState('');
  const [availablePhrases, setAvailablePhrases] = useState([]);
  const [shownPhrases, setShownPhrases] = useState([]);

  useEffect(() => {
    
    setAvailablePhrases([...phrases]);
  }, []);

  const handleRandomTotal = () => {
    if (availablePhrases.length === 0) {
      
      setAvailablePhrases([...phrases]);
      setShownPhrases([]);
    } else {
     
      const randomQuote = getRandomElemArray(availablePhrases);
      const randomImage = getRandomElemArray(imagenes);

      
      setShownPhrases([...shownPhrases, randomQuote]);
      setAvailablePhrases(availablePhrases.filter((phrase) => phrase.id !== randomQuote.id));

      
      setQuote(randomQuote);
      setImage(randomImage.imagen);
    }
  };

  return (
    <div className="App background-image"  style={{ backgroundImage: `url(${image})` }}>
      
        <div className="principal">
          <h1 className="titulo">
            Fate/Grand Orden: <p className="sub-titulo">Las top lemas heroicas</p>
          </h1>
          <Quote phrase={quote} />
          <BtnQuote handleRandomTotal={handleRandomTotal} />
        
      </div>
    </div>
  );
}

export default App;

//me demore 4 dias en romper los codigos//
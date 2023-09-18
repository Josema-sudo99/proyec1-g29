import React from 'react';

const BtnQuote = ({ handleRandomTotal }) => {
  return (
    <button className="button" onClick={handleRandomTotal}>
      Otra frase y fondo de pantalla
    </button>
  );
};

export default BtnQuote;







// let agua = getRandomElemArray(phrases)
    // if (agua.id === Quote.id) {
    //   agua = getRandomElemArray(phrases)
    // }
    // setQuote(agua)
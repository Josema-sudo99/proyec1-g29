
const Quote = ({ phrase }) => {



  return (

    <div className="phrase">
      <p className="phrase-texto">{phrase.phrase} </p>
      <h3 className="phrase-autor">{phrase.author}</h3>
    </div>
  )
}

export default Quote
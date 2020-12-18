import React, { useState, Component } from 'react'

function VocabAPI() {
  // React Hooks State
  const [vocab, setVocab] = useState('');
  const [vocabHist, setVocabHist] = useState([' ', 'apple', ' ', 'banana']);

  // React Hooks Functions
  const handleVocab = (e) => {
    setVocab(e.target.value);
  }

  const handleSubmitVocab = (e) => {
    e.preventDefault(); //Prevents hot reload upon submit
    const currSearch = e.target[0].value;
    if (vocabHist.length <= 18) {
      setVocabHist([' ', currSearch, ...vocabHist]);
    } else {
      const vocabHistCopy = vocabHist.slice(0, vocabHist.length - 2);
      setVocabHist([' ', currSearch, ...vocabHistCopy]);
    }
    console.log('Form Submitted');
  }
 
  //Render
  return (
    <div className='vocabContainer'>
      This is our API Component!
      <form onSubmit={handleSubmitVocab}>
        <label className='apiTextBox'>
          <input type="text" name="vocab" placeholder="Translate vocabulary" value={vocab} onChange={handleVocab}></input> 
        </label>
        <input type="submit" value="Submit"/> 
        <div className='vocabHistContainer'>
          <div className='vocabHist'> { vocabHist } </div>
        </div>
      </form>
    </div>
  )
}

export default VocabAPI;

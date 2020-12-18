import React, { useState, Component } from 'react'

function VocabAPI() {
  // React Hooks
  const [vocab, setVocab] = useState('');
  const [vocabHist, setVocabHist] = useState(['apple', 'banana']);

  const handleVocab = (e) => {
    setVocab(e.target.value);
  }

  const handleSubmitVocab = (e) => {
    e.preventDefault();
    const currSearch = e.target[0].value;
    setVocabHist([currSearch, ...vocabHist]);
    console.log('Form Submitted');
  }
 
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

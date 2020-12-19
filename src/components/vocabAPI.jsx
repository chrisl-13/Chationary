import React, { useState, Component } from 'react';

function VocabAPI() {
  // React Hooks State (Updating state is async)
  const [vocab, setVocab] = useState('');
  const [search, setSearch] = useState('');
  const [vocabHist, setVocabHist] = useState([' ', 'apple', ' ', 'banana']);
  const [definition, setDefinition] = useState(null);
  const [selectLang, setSelectLang] = useState('en');
  const [transLang, setTransLang] = useState('en');

  // React Hooks Functions
  const handleVocab = (e) => {
    setVocab(e.target.value)
    setSearch(e.target.value.replace(/ /gi, '%20'));
  }

  const handleSubmitVocab = async (e) => {
    e.preventDefault(); //Prevents hot reload upon submit
    window.open(`https://translate.google.com/?sl=${selectLang}&tl=${transLang}&text=${search}&op=translate`);
    //Word History
    const currSearch = e.target[0].value;
    if (vocabHist.length <= 18) {
      setVocabHist([' ', currSearch, ...vocabHist]);
    } else {
      const vocabHistCopy = vocabHist.slice(0, vocabHist.length - 2);
      setVocabHist([' ', currSearch, ...vocabHistCopy]);
    }
    console.log('Form Submitted');
  }

  const handleSelectLang = (e) => {
    setSelectLang(e.target.value);
  }

  const handleTransLang = (e) => {
    setTransLang(e.target.value);
  }
  
  //Render
  return (
    <div className='vocabContainer'>
      This is our API Component!
      <form onSubmit={handleSubmitVocab}>
        <label className='apiTextBox'>
        <label htmlFor='sl' className='slContainer'>Translate from:</label>
            <select name='sl' id='sl' className='sl' value={selectLang} onChange={handleSelectLang}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          <label htmlFor='tl' className='tlContainer'>Translate to:</label>
            <select name='tl' id='tl' className='tl' value={transLang} onChange={handleTransLang}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          <input type="text" name="vocab" placeholder="Translate vocabulary" value={vocab} onChange={handleVocab}></input> 
        </label>
        <input type="submit" value="Translate"/> 
        <div>Definition of a banana or mango...? { definition }</div>
        <div className='vocabHistContainer'>
          <p>Search History:</p>
          <div className='vocabHist'> { vocabHist } </div>
        </div>
      </form>
    </div>
  )
}

export default VocabAPI;
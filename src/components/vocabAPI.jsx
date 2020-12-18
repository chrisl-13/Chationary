import React, { useState, Component } from 'react'

function vocabAPI() {
  // React Hooks
  const [vocab, setVocab] = useState('')

function handleVocab (e) {
  setVocab(e.target.value);
}
 
  return (
    <div className='vocabContainer'>
      This is our API Component!
      <form> {/* onSubmit={handleSubmitVocab} */}
        <label>
          <input type="text" name="vocab" placeholder="Translate vocabulary" value={vocab} onChange={handleVocab}></input> {/* onChange={this.handleVocab} */}
        </label>
        <input type="submit" value="Submit"/> 
      </form>
    </div>
  )
}


    


export default vocabAPI;

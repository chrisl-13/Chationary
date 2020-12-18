import React, { Component } from 'react'

function vocabAPI() {
  return (
    <div className='vocabContainer'>
      This is our API Component!
      <form> {/* onSubmit={this.handleSubmitVocab} */}
        <label>
          <input type="text" name="vocab" placeholder="Translate vocabulary"></input> {/* onChange={this.handleVocab} */}
        </label>
        <input type="submit" value="Submit"/> 
      </form>
    </div>
  )
}


    


export default vocabAPI;

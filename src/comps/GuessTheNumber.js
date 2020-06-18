import React from 'react';

class GuessTheNumber extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
  }
  
  handleInput = (e) => {
    this.setState({
      input: parseInt(e.target.value)
    })
  }
  
  render(){
    const {guessTheNumber} = this.props;
    const {input} = this.state;
    return(
      <div className="game-panel">
        <h2>Guess the number between 1 and 100</h2>
        <div className="input-panel">
          <input 
            type="number"
            value={input}
            onInput={this.handleInput}
          />
          <button 
            onClick={() => {
              guessTheNumber(input)
              this.setState({
                input: ''
              });
            }}
          >Check
          </button>
        </div>
      </div>
    )
  }
}

export default GuessTheNumber;
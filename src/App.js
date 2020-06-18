import React from 'react';
import GuessTheNumber from './comps/GuessTheNumber';
import GuessedInfo from './comps/GuessedInfo';
import NotGuessedInfo from './comps/NotGuessedInfo';
import NewNumber from './comps/NewNumber';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      actNumber: 0,
      enteredNumber: 0,
      numberOfTries: 0
    }
  }
  
  getRandomNumber = () => {
    const newNumber = parseInt(Math.floor(Math.random()*100));
    
    this.setState({
      actNumber: newNumber,
      enteredNumber: 0,
      numberOfTries: 0
    })
  }
  
  guessTheNumber = (input) => {
    this.setState({
      enteredNumber: input,
      numberOfTries: this.state.numberOfTries+1
    });
  }
  
  render(){
    const {enteredNumber, actNumber, numberOfTries} = this.state;
    
    return (
      <div className="main">
        <div className="app">
          <GuessTheNumber guessTheNumber={this.guessTheNumber}/>
          {
            numberOfTries>0 && (
              enteredNumber === actNumber 
              ? <GuessedInfo number={actNumber} tries={numberOfTries}/>
              : enteredNumber>100||enteredNumber<0
              ? <NotGuessedInfo info="out of range"/>
              : enteredNumber>actNumber
              ? <NotGuessedInfo info="too high"/>
              : <NotGuessedInfo info="too low"/>
            )
          }
          { enteredNumber === actNumber && (
          <NewNumber newNumber={this.getRandomNumber}/>)
          }
        </div>
      </div>
    )
  }
}

export default App;

import React from 'react';

const GuessedInfo = (props) => {
  return (
    <h3 className="info guessed">Yes!!! The number is {props.number}. You guessed the number in {props.tries} tries!!!</h3>
  )
}

export default GuessedInfo;
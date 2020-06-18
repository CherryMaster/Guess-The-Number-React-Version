import React from 'react';

const NewNumber = (props) => {
  return (
    <button onClick={props.newNumber}>
      New number!
    </button>
  )
}

export default NewNumber;
import React from 'react';

const NotGuessedInfo = (props) => {
   return (
        <h3 className="info notguessed">Your number is {props.info}. Try again.</h3>
  )
}

export default NotGuessedInfo;
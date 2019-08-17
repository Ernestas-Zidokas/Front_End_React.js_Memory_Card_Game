import React from 'react';

function Score() {
  return (
    <div>
      <label>Your Name:</label>
      <input type="text" name="score" />
      <button type="button" onClick={() => console.log('set Score')}>
        Submit
      </button>
    </div>
  );
}

export default Score;

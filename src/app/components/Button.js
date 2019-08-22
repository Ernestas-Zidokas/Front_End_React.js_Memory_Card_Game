import React from 'react';

const noop = () => undefined;

function Button({ className, onClick = noop, children, type = 'button' }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

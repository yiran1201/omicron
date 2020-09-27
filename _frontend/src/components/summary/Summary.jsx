import {useState, useEffect} from 'react';
import React from 'react';

const Summary = () => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  useEffect(() => {
    document.title = `you click ${count} times`;
  });

  return (
    <>
      <p>You clicked {count}times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button
        style={{backgroundColor: backgroundColor}}
        onClick={() => setBackgroundColor('#7FFF00')}>
        hello
      </button>
    </>
  );
};

export default Summary;

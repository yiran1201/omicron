import {useState} from 'react';
import React from 'react';
import './Summary.scss';

const Summary = () => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  return (
    <>
      <p>You clicked {count}times</p>
      <button
        onClick={() => {
          const newCount = count+1;
          if (newCount % 10 === 0) {
            setBackgroundColor('#ffe6e6');
          } else if (newCount % 2=== 0) {
            setBackgroundColor('#80aaff');
          }else
          setBackgroundColor('#b3ffcc');
         setCount(newCount)
        }}>
        Click me
      </button>
      <button
        className="buttonEffect"
        style={{backgroundColor: backgroundColor}}
        onClick={() => setBackgroundColor('#ff9900')}>
        hello
      </button>
    </>
  );
};

export default Summary;

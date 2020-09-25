import {useState, useEffect} from 'react';
import React from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you click${count}times`;
  });

  return (
    <>
      <p>You clicked {count}times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}

export default Summary;

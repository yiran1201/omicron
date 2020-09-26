import {useState, useEffect} from 'react';
import React from 'react';

function Summary() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you click ${count} times`;
  });

  return (
    <>
      <p>You clicked {count}times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );

}
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
});
export default Summary;


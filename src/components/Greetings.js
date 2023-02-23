import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getGreeting } from '../redux/greetings/greetings';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting ());
  }, []);

  return (
    <div>
      <h1>This is a randomly generated greeting</h1>
      <h2>{greeting}</h2>
    </div>
  );
}

export default Greeting;
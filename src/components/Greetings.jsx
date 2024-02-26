import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const greet = useSelector((state) => state.greeting.message);

  useEffect(() => {
    if (!greet) {
      dispatch(fetchGreeting())
        .then(() => {
          console.log('Success!!!');
        }).catch(() => { console.log('Error!!!'); });
    }
  }, [dispatch]);

  return (
    <div>
      {greet}
    </div>
  );
};

export default Greetings;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/greeting';
import '../App.css';

const Greeting = () => {
  const greetingList = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  });

  return (
    <div className="App">
      <h2>Greeting</h2>
      <p>{greetingList.message}</p>
    </div>
  );
};

export default Greeting;

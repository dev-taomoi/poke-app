import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDex, dexSelector } from '../slices/dex';

const Home = () => {
  const dispatch = useDispatch();
  const { dex, loading, hasErrors } = useSelector(dexSelector);
  useEffect(() => {
    dispatch( fetchDex() );
  }, [dispatch]);
  const renderDex = () => {
    if (loading) { return <p>Loading posts...</p>; }
    if (hasErrors) { return <p>Unable to display posts.</p>; }
    return dex.map(poke => { return <li key={poke.id}>{poke.name}</li>; });
  }
  return (
    <section>
      <h1>Home</h1>
      <p>Welcome home!</p>
      <ul>{ renderDex() }</ul>
    </section>
  );
}

export default Home;
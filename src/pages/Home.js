import React, { Fragment, useContext, useEffect } from 'react';

import FirebaseContext from '../context/firebase/FirebaseContext';

import Form from '../components/Form';
import Notes from '../components/Notes';
import Loader from '../components/Loader';


const Home = () => {
  const {
    loading,
    notes,
    fetchNotes
  } = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Form />
      <hr />
      {
        loading
          ? <Loader />
          : <Notes notes={ notes } />
      }
    </Fragment>
  );
};


export default Home;

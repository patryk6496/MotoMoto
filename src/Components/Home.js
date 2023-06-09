import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

const Home = () => {
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('loggedInUserEmail');

    if (storedEmail) {
      setLoggedInUserEmail(storedEmail);
      toast.success(`Witaj ${storedEmail}`);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('loggedInUserEmail', loggedInUserEmail);
  }, [loggedInUserEmail]);

  return (
    <div>
      <ToastContainer />
      <Header loggedInUserEmail={loggedInUserEmail} />
      {/* Pozostała część zawartości strony */}
      {loggedInUserEmail && (
        <h1>Witaj {loggedInUserEmail}</h1>
      )}
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

const Home = () => {
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('');

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('loggedInUserEmail');

    if (storedEmail) {
      setLoggedInUserEmail(storedEmail);
      toast.success(`Witaj ${storedEmail}`);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('loggedInUserEmail', loggedInUserEmail);
  }, [loggedInUserEmail]);

  const handleLogout = () => {
    sessionStorage.removeItem('loggedInUserEmail');
    setLoggedInUserEmail('');
  };

  return (
    <div>
      <ToastContainer />
      <Header />
      {/* Pozostała część zawartości strony */}
      {loggedInUserEmail && (
        <button onClick={handleLogout}>Wyloguj</button>
      )}
    </div>
  );
}

export default Home;

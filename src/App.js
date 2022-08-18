import 'src/assets/styles/_global.scss';

import CssBaseline from '@mui/material/CssBaseline';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from 'src/components/Header';
import Home from 'src/pages/home';

import LinearIndeterminate from './components/Loader';
import Careers from './pages/careers';

function App() {
  const [progress, setProgress] = useState(true);
  const [prevLoc, setPrevLoc] = useState('');
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
    if (location.pathname === prevLoc) {
      setPrevLoc('');
    }
  }, [location]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(false);
    }, 700);
  }, [prevLoc]);

  return (
    <>
      <CssBaseline />
      <Header />
      {progress ? <LinearIndeterminate /> : (
        <Routes>
          <Route exact path="/" element={<Home tabTitle="Fakng - Home page" />} />
          <Route path="careers" element={<Careers tabTitle="Fakng - Careers page" />} />
        </Routes>
      )}
    </>
  );
}

export default App;

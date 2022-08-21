import 'src/assets/styles/_global.scss';

import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from 'src/components/Header';
import Careers from 'src/pages/careers';
import routes from 'src/router/routes';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path={routes.careers} element={<Careers tabTitle="Fakng - Careers page" />} />
      </Routes>
    </>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { routeConstants } from '../../constants';
import RegisterPage from '../Register';

function App() {
  return (
    <div id='page-wrapper' className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path={routeConstants.SIGNUP}
            element={<RegisterPage />}
          />
          <Route
            path='*'
            element={routeConstants.HOMEPAGE}
          />
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;

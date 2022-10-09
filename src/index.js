import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './new-project';
import theme from './theme.js';
import { ThemeProvider } from '@mui/material/styles';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Flights from "./Flights";
import Wallet from "./Wallet";
import Reports from "./Reports";
import Statistics from "./Statistics";
import Settings from "./Settings";
import Dashboard from "./Dashboard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Routes>
                  <Route element={<App/>} path='/'>
                    <Route path={'dashboard'} element={<Dashboard/>}/>
                      <Route index path={'flights'} element={<Flights/>}/>
                      <Route path={'wallet'} element={<Wallet/>}/>
                      <Route path={'reports'} element={<Reports/>}/>
                      <Route path={'statistics'} element={<Statistics/>}/>
                      <Route path={'settings'} element={<Settings/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);

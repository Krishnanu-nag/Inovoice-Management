import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InvoiceProvider } from './context/InvoiceContext';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import './styles/App.css';

const App = () => (
  <InvoiceProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </InvoiceProvider>
);

export default App;

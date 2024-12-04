import React, { useContext, useEffect } from 'react';
import { InvoiceContext } from '../context/InvoiceContext';
import InvoiceList from '../components/InvoiceList';
import InvoiceForm from '../components/InvoiceForm';
import '../styles/HomePage.css';

const HomePage = () => {
  const { fetchInvoices, loading, error } = useContext(InvoiceContext);

  useEffect(() => {
    fetchInvoices();
  }, []);

  return (
    <div className="container">
      <h1 className="header">Invoice Management</h1>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <InvoiceForm />
      <InvoiceList />
    </div>
  );
};

export default HomePage;

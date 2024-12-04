import React, { createContext, useState } from 'react';

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchInvoices = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/invoices'); // Replace with your API endpoint
      setInvoices(response.data);
    } catch (err) {
      setError('Failed to fetch invoices');
    } finally {
      setLoading(false);
    }
  };

  const addInvoice = (invoice) => setInvoices([...invoices, invoice]);
  const deleteInvoice = (id) => setInvoices(invoices.filter((inv) => inv.id !== id));

  return (
    <InvoiceContext.Provider value={{ invoices, fetchInvoices, addInvoice, deleteInvoice, loading, error }}>
      {children}
    </InvoiceContext.Provider>
  );
};

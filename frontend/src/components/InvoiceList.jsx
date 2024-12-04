import React, { useContext } from 'react';
import { InvoiceContext } from '../context/InvoiceContext';
import '../styles/InvoiceList.css';

const InvoiceList = () => {
  const { invoices, deleteInvoice } = useContext(InvoiceContext);

  return (
    <div>
      <h2>Invoices</h2>
      <ul className="invoice-list">
        {invoices.map((invoice) => (
          <li key={invoice.id} className="invoice-item">
            <span>{invoice.name}</span>
            <button
              onClick={() => deleteInvoice(invoice.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;

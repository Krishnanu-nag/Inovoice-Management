import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { InvoiceContext } from '../context/InvoiceContext';

const InvoiceForm = () => {
  const { addInvoice } = useContext(InvoiceContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addInvoice({ id: Date.now(), ...data });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <input
        type="text"
        {...register('name', { required: true })}
        placeholder="Invoice Name"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Invoice
      </button>
    </form>
  );
};

export default InvoiceForm;

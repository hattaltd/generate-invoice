import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

import dayjs from 'dayjs';

import { useInvoiceStore } from 'store/invoice';

const InvoiceHeader = () => {
  const { invoiceData, setId, setName, setAdderss, setDate } = useInvoiceStore();

  const dateHandler = (dateRange: { startDate: string; endDate: string }) => {
    const startDate = dayjs(dateRange.startDate).toDate();
    const endDate = dayjs(dateRange.endDate).toDate();
    setDate(startDate, endDate);
  };

  return (
    <section className="h-screen border-2 border-black py-10">
      <div className="min-h-6 container mx-auto border grid grid-cols-2">
        {/* left-content-parent */}
        <div>
          <div className="flex flex-col gap-y-5">
            <h1>Logo company</h1>
            <div>
              <h1>User Name: {invoiceData.name}</h1>
              <label>User Name:</label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={invoiceData.name}
                placeholder={'pls key in name'}
              ></input>
              <h1>User Address: {invoiceData.address}</h1>
              <label>User Address:</label>
              <input
                onChange={(e) => {
                  setAdderss(e.target.value);
                }}
                value={invoiceData.address}
                placeholder={'pls key in address'}
              ></input>
            </div>
          </div>
        </div>
        {/* left-content-parent */}
        <div>
          <h1>Invoice ID: {invoiceData.id}</h1>
          <label>Invoice ID:</label>
          <input
            onChange={(e) => {
              setId(e.target.value);
            }}
            value={invoiceData.id}
            placeholder={'pls key in ID'}
          ></input>
          <h1>Issue Date: {dayjs(invoiceData.issueDate).format('DD/MM/YYYY')}</h1>
          <Datepicker
            value={{
              startDate: invoiceData.issueDate,
              endDate: invoiceData.dueDate,
            }}
            onChange={dateHandler}
          />
          <h1>Due Date: {dayjs(invoiceData.dueDate).format('DD/MM/YYYY')}</h1>
          <h1>Price: {invoiceData.totalPrice}</h1>
        </div>
      </div>
    </section>
  );
};

export default InvoiceHeader;

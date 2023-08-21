import dayjs from 'dayjs';
import uniqid from 'uniqid';
import { create } from 'zustand';

export interface InvoiceDataType {
  id: string;
  name: string;
  address: string;
  issueDate: Date;
  dueDate: Date;
  totalPrice: number;
  tax: number;
  services: {
    quantity: number;
    desc: string;
    name: string;
    price: number;
  }[];
}

export interface IInvoiceSchema {
  invoiceData: InvoiceDataType;
  setId: (param: string) => void;
  setName: (param: string) => void;
  setAdderss: (param: string) => void;
  setIssueDate: (startDate: Date, endDate: Date) => void;
}

export const useInvoiceStore = create<IInvoiceSchema>((set, get) => ({
  invoiceData: {
    id: uniqid(),
    name: '',
    address: '',
    issueDate: dayjs().toDate(),
    dueDate: dayjs().add(3, 'year').toDate(),
    totalPrice: 0.0,
    tax: 0.0,
    services: [],
  },
  setId: (param: string) => {
    const currentData = get().invoiceData;

    set({
      invoiceData: {
        ...currentData,
        id: param,
      },
    });
  },
  setName: (param: string) => {
    const currentData = get().invoiceData;

    set({
      invoiceData: {
        ...currentData,
        name: param,
      },
    });
  },
  setAdderss: (param: string) => {
    const currentData = get().invoiceData;

    set({
      invoiceData: {
        ...currentData,
        address: param,
      },
    });
  },
  setIssueDate: (startDate: Date, endDate: Date) => {
    const currentData = get().invoiceData;
    set({
      invoiceData: {
        ...currentData,
        issueDate: startDate,
        dueDate: endDate,
      },
    });
  },
}));

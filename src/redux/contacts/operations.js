import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    const response = await axios.post('/contacts', contact);
    return response.data;
  }
);

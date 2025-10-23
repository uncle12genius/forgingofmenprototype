// src/api/books.js
import apiClient from './index';

export const fetchBooks = (params) => apiClient.get('/books', { params });
export const addBook = (payload) => apiClient.post('/books', payload);
export const updateBook = (id, payload) => apiClient.put(`/books/${id}`, payload);
export const deleteBook = (id) => apiClient.delete(`/books/${id}`);

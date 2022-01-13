import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NotesProvider } from './contexts/notes-context';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


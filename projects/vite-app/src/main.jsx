import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppLayout from './components/AppLayout';
import Gallery from './components/Gallery';

const root = document.getElementById('root')

ReactDOM
    .createRoot(root)
    .render(
        <React.StrictMode>
            <AppLayout content={<Gallery />} />
        </React.StrictMode>,
    )

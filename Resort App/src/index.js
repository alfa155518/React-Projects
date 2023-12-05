import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import { RoomProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <RoomProvider>
    <Router>
    <App />
    </Router>
    </RoomProvider>
    </>
);


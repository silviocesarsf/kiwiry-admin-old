import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./input.css"
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import { theme } from './theme';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <RouterProvider router={router} />
        </MantineProvider>
    </StrictMode>
)

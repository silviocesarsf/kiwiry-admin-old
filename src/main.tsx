import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './input.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import VerifyEmail from "./pages/VerifyEmail"
import { theme as baseTheme } from './theme';

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/verify-email', element: <VerifyEmail />}
]);

const colorSchemeManager = localStorageColorSchemeManager({ key: 'kiwire-color-scheme' });
createRoot(document.getElementById('root')!).render(
    <>
       <MantineProvider
            theme={baseTheme}
            colorSchemeManager={colorSchemeManager}
            defaultColorScheme="light"
        >
            <RouterProvider router={router} />
        </MantineProvider>
    </>
);

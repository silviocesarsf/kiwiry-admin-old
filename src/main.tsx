import { createRoot } from 'react-dom/client';
import './input.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import VerifyEmail from "./pages/VerifyEmail"
import { theme as baseTheme } from './theme';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from './pages/ForgotPassword';

const colorSchemeManager = localStorageColorSchemeManager({ key: 'kiwire-color-scheme' });
createRoot(document.getElementById('root')!).render(
    <>
        <MantineProvider
            theme={baseTheme}
            colorSchemeManager={colorSchemeManager}
            defaultColorScheme="light"
        >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    } />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/verify-email' element={<VerifyEmail />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    </>
);

import * as React from 'react';
import Header from '../components/Header';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Loading from '../components/Loading';

export default function Layout() {

    return (
        <>
            <Header />
            <Box
                sx={{
                    minHeight: '100vh',
                    width: '100vw',
                    bgcolor: 'background.default',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            />
            <Container maxWidth='xl' sx={{ mt: 4, position: 'relative', minHeight: '100vh' }}>
                <React.Suspense fallback={<Loading />}>
                    <Outlet />
                </React.Suspense>
            </Container>
        </>
    );
}
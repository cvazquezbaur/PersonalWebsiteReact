import * as React from 'react';
import Header from '../components/Header';
import { Box, Container } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, type Transition } from 'framer-motion';
import Loading from '../components/Loading';

export default function Layout() {
    const location = useLocation();
    const reduceMotion = useReducedMotion();

    const variants = {
        initial: { opacity: 0, y: 8, scale: 0.998 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -6, scale: 0.998 },
    };
    const transition: Transition = reduceMotion
        ? { duration: 0 }
        : { duration: 0.8, ease: [0.22, 0.9, 0.3, 1] };

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
                {/* <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={location.key}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={transition}
                        style={{ width: '100%', willChange: 'transform, opacity' }}
                    >
                        <React.Suspense fallback={<Loading />}>
                            <Outlet />
                        </React.Suspense>
                    </motion.div>
                </AnimatePresence> */}
                <React.Suspense fallback={<Loading />}>
                    <Outlet />
                </React.Suspense>
            </Container>
        </>
    );
}
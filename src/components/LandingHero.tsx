// import { Box, Button, Typography } from '@mui/material';
// import { alpha } from '@mui/material/styles';
// import theme from '../theme';
// import { useNavigate } from 'react-router-dom';

// export default function LandingHero() {
//     const navigate = useNavigate();
//     const handleClick = async () => {
//         navigate("home");
//     }
//     return (
//         <Box sx={{ bgcolor: alpha(theme.palette.background.paper, 0.5), backdropFilter: 'blur(6px)', p: 4, borderRadius: '4px', m: 4 }}>
//             <Typography variant='h1' sx={{ fontWeight: 400, fontFamily: 'Avenir' }} gutterBottom>
//                 Carlos Vazquez Baur
//             </Typography>
//             <Typography variant='h4' sx={{ fontWeight: 200, fontFamily: 'Museo' }} gutterBottom>
//                 Software Engineer, Ski Instructor, Outdoorsman, Performer
//             </Typography>
//             <Button variant="outlined" sx={{ backgroundColor: 'primary' }} onClick={handleClick}>Come On In!</Button>
//         </Box>
//     )
// }

import { Box, Button, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import theme from '../theme';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LandingHero() {
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);

    const handleClick = async () => {
        setAnimate(true);
        setTimeout(() => {
            navigate("home");
        }, 700); // match animation duration
    };

    return (
        <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={animate ? { 
                scale: [1, 1.2, 0.95, 1.05, 1], 
                opacity: [1, 1, 0.7, 0.3, 0] 
            } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, times: [0, 0.2, 0.4, 0.7, 1], ease: "easeInOut" }}
        >
            <Box sx={{ bgcolor: alpha(theme.palette.background.paper, 0.5), backdropFilter: 'blur(6px)', p: 4, borderRadius: '4px', m: 4 }}>
                <Typography variant='h1' sx={{ fontWeight: 400, fontFamily: 'Avenir' }} gutterBottom>
                    Carlos Vazquez Baur
                </Typography>
                <Typography variant='h4' sx={{ fontWeight: 200, fontFamily: 'Museo' }} gutterBottom>
                    Software Engineer, Ski Instructor, Outdoorsman, Performer
                </Typography>
                <Button variant="outlined" sx={{ backgroundColor: 'primary' }} onClick={handleClick}>Come On In!</Button>
            </Box>
        </motion.div>
    );
}
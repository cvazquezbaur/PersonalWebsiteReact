import { Avatar, Box, Button, Stack, Typography } from '@mui/material';

export default function SingBio() {
    return(
        <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }} >
           <Avatar
                            src="./src/assets/SymphonyHeadshot.png"
                            alt="Carlos Vazquez Baur"
                            sx={{
                                width: { xs: 120, sm: 160, md: 200 },
                                height: { xs: 120, sm: 160, md: 200 },
                                mb: 2,
                                boxShadow: 3,
                            }}
                        />
                        <Typography variant="h4" sx={{ fontWeight: 500 }}>
                            Carlos Vazquez Baur
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2 }}>
                            Vocalist | Actor | Experience Maker
                        </Typography>
                        <Stack spacing={1} alignItems="center">
                            <Button variant="contained" color="primary" href="#contact">
                                Contact
                            </Button>
                            <Button variant="outlined" color="primary" href="#resume">
                                Download Resume
                            </Button>
                        </Stack> 
        </Box>
    )
}
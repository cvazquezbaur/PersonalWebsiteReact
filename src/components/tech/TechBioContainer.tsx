import { GitHub, LinkedIn } from '@mui/icons-material';
import { Avatar, Container, Divider, IconButton, Stack, Typography } from '@mui/material';

export default function TechBio() {
    return (
        <Container
            component='section'
            disableGutters
            sx={{
                maxHeight: '100vh',
                p: '5px',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}
        >
            <Stack 
                direction='column'
                spacing={1.5}
                alignItems='center'
                sx={{ width:'100%', maxWidth: 720, textAlign: 'center' }}
            >
                <Avatar
                    alt="Carlos Vazquez Baur"
                    src="./src/assets/CarlosTequila.jpg"
                    sx={{
                        width: { xs: 120, sm: 160, md: 220, lg: 280 },
                        height: { xs: 120, sm: 160, md: 220, lg: 280 },
                        mb: 2, 
                        boxShadow: 3,
                    }}
                />
                <Typography variant='h4' gutterBottom sx={{ fontWeight: 400 }}>
                    Carlos Vazquez Baur
                </Typography>
                <Typography
                    variant='h6'
                    gutterBottom
                >
                    Senior Software Engineer
                </Typography>
                <Divider color='button.primary' sx={{ width: '60%', my: 2 }} />
                <Typography variant='body1' gutterBottom >
                    A skilled and dynamic developer with expereience in full-stack web and Android development who has contributed to significant projects for organizations like the New Mexico Department of Health, New Mexico Department of Finance and Administration, New Mexico Legislative Finance Council, and TD Bank.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    <IconButton href="#" color='primary' target='_blank' rel='noopener noreferrer'>
                        <GitHub/>
                    </IconButton>  
                    <IconButton href="#" color='primary' target='_blank' rel='noopener noreferrer'>
                        <LinkedIn/>
                    </IconButton> 
                </Typography>
            </Stack>

        </Container>
    );
}
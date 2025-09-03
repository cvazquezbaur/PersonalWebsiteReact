import { Container, Grid, Stack } from '@mui/material';
import TechBio from '../components/tech/TechBioContainer';
import TechSkills from '../components/tech/TechSkills';
import TechExperience from '../components/tech/TechExperience';


export default function Tech() {
    return (
        <Grid container sx={{ height: '100vh' }}>
                <Grid
                    size={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        borderRight: { md: '1px solid #E0E0E0' },
                        px: 2,
                        minHeight: '100vh'
                    }}
                >
                    <TechBio />
                </Grid>
                <Grid
                    size={8}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        minHeight: '100vh',
                        px: 2,
                        py: 4,
                    }}
                >
                    <Stack
                        direction='column'
                        spacing={1.5}
                        alignItems='center'
                        sx={{ width: '100%', textAlign: 'center', mb: 5, display: 'flex' }}
                    >
                        <TechSkills />
                        <TechExperience />
                    </Stack>                    
                </Grid>
            </Grid>
    )
}
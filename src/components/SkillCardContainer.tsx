import { Box, Grid } from '@mui/material';
import SkillCard from './SkillCard';

export default function CardContainer() {
    return (
        <Box
            component='section'
            sx={{
                height: '40vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
            }}
        >
            <Grid
                container
                spacing={3}
                alignItems='center'
                sx={{ maxWidth: 1200, width: '100%' }}
            >
                <Grid
                    size={4}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <SkillCard keyType='sing' />
                </Grid>
                <Grid
                    size={4}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <SkillCard keyType='ski' />
                </Grid>
                <Grid
                    size={4}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <SkillCard keyType='software' />
                </Grid>
            </Grid>
        </Box>
    )
}
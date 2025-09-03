import { Container, Grid, Paper, Avatar, Typography, Box, Divider, Stack, Button } from '@mui/material';
import SingBio from '../components/sing/SingBio';
import { alpha } from '@mui/material/styles';
import PerformerInfo from '../components/sing/PerformerInfo';


export default function Sing() {
    return (
        <Container maxWidth="xl" sx={{ py: 6 }}>
            <Grid container spacing={4}>
                {/* Left column: Profile */}
                <Grid size={6} sx={{ backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.7),
                        p: 5,
                        borderRadius: 5,
                        borderRight: '1px solid',
                        borderColor: 'divider',
                        backdropFilter: 'blur(4px)', }}>
                    <SingBio />
                </Grid>

                {/* Right column: Portfolio */}
                <Grid size={6}>
                    <PerformerInfo />
                </Grid>
            </Grid>
        </Container>
    )
}
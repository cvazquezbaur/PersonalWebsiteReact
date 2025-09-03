import { Avatar, Box, Grid, Typography } from '@mui/material';

export default function Bio() {
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
                spacing={2}
                alignItems='center'
                sx = {{ maxWidth: 1200, width: '100%' }}
            >
                <Grid size={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                        alt="Carlos Vazquez Baur"
                        src="./src/assets/Avatar-light.jpg"
                        sx={{ 
                            width: { xs:120, sm:160, md:220 }, 
                            height: { x:120, sm:160, md:220 },
                            boxShadow: 3, 
                        }}
                    />
                </Grid>
                <Grid size={9}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            pr: { xs:0, md:6 },
                        }}
                    >
                        <Typography 
                            variant='h5' 
                            sx={{ 
                                fontWeight: 400, 
                                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                                lineHeight: 1.6, 
                            }}
                        >
                            Carlos Vazquez Baur is an experienced, Mexican-American, IT and Software professional who has a passion for the arts and outdoors and pursues all sides of himself professionally.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
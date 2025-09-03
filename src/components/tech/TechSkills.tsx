import { BlurCircularOutlined } from '@mui/icons-material';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';

type Props = {
    skill: string;
    sx?: any;
};

export function Skill({ skill }: Props) {
    const skillString = skill;
    return (
        <Paper
            elevation={3}
            square={false}
            sx={{
                alignItems: 'center',
                display: 'inline-flex',
                px: 1.5, py: 0.5,
                borderRadius: 2,
                transition: 'background 0.2s, color 0.2s',
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    boxShadow: 6,
                },
            }}
        >
            <Typography variant='body2' component='span' sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }} >
                <BlurCircularOutlined fontSize='inherit' /> <span>{skillString}</span>
            </Typography>
        </Paper>
    )
}

export default function TechSkills() {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Stack
                direction='column'
                spacing={1.5}
                alignItems='center'
                sx={{ width: '100%', textAlign: 'center', mb: 5, display: 'flex' }}
            >
                <Paper elevation={3} square={false} sx={{ p: '15px', backgroundColor: 'transparent', borderRadius: '3px' }} >
                    <Typography variant='h6' gutterBottom sx={{ borderBottom: '1px solid', mb: '10px' }}>
                        Core Skills
                    </Typography>
                    <Typography variant='body1' gutterBottom sx={{ justifyContent: 'start' }} >
                        Languages:
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1,
                            py: 2,
                            overflowX: 'auto',
                            overflowY: 'auto',
                            flexWrap: 'wrap'
                        }}
                    >

                        <Skill skill='Java' /> <Skill skill='C++' /> <Skill skill='C#' /> <Skill skill='Kotlin' /> <Skill skill='Python' /> <Skill skill='TypeScript' /> <Skill skill='Dart' />
                    </Box>
                    <Typography variant='body1' gutterBottom sx={{ justifyContent: 'start' }} >
                        Frameworks & Technologies:
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1,
                            py: 2,
                            overflowX: 'auto',
                            overflowY: 'auto',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Skill skill='Spring Boot' /> <Skill skill='Android SDK' /> <Skill skill='Jetpack Compose' /> <Skill skill='React' /> <Skill skill='ASP.NET Core' /> <Skill skill='MySQL' /> <Skill skill='Flutter' /> <Skill skill='Git' /> <Skill skill='Jenkins' /> <Skill skill='Power BI' />
                    </Box>
                    <Typography variant='body1' gutterBottom sx={{ justifyContent: 'start' }} >
                        Cloud:
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1,
                            py: 2,
                            overflowX: 'auto',
                            overflowY: 'auto',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Skill skill='Azure' /> <Skill skill='AWS' /> <Skill skill='Docker' />
                    </Box>
                </Paper>

            </Stack>
        </Container>
    )
}
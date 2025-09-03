import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

export default function SkiServiceCard() {
    return (
        <Paper elevation={4} sx={{ marginTop: 5, borderRadius: 3, overflow: 'hidden' }}>
            <Typography variant='h4' sx={{ fontWeight: 400, bgcolor: 'primary.main', color: 'primary.contrastText', px: 3, py: 2 }} gutterBottom>
                Services
            </Typography>
            <List component='ul' sx={{ width: '100%', pl: 3 }}>
                <ListItem component='li' disableGutters>
                    <ListItemText>
                        <Typography variant='h5' sx={{ fontWeight: 400, mb: 2 }}>
                            Private Lessons for all ages
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem component='li' disableGutters>
                    <ListItemText>
                        <Typography variant='h5' sx={{ fontWeight: 400, mb: 2 }}>
                            Group Lessons (families included)
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem component='li' disableGutters>
                    <ListItemText>
                        <Typography variant='h5' sx={{ fontWeight: 400, mb: 2 }}>
                            Technique Workshops (moguls, carving...etc.)
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
            <Typography variant='subtitle1' gutterBottom>
                *If services are requested through Ski Santa Fe, all bookings must go directly through their ski school with a formal request for me.
            </Typography>
        </Paper>
    )
}
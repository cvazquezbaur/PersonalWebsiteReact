import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import * as React from 'react';

export default function SkiContact() {
    const MAX = 500;
    const [fname, setFname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [emailAddress, setEmailAddress] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: submit or navigate — placeholder:
        console.log({ fname, lname, emailAddress, message });
    };
    return (
        <Paper elevation={5} sx={{ marginTop: 5, borderRadius: 3, overflow: 'hidden' }}>
            <Typography 
                variant='h4' 
                sx={{ 
                    fontWeight: 400, 
                    bgcolor: 'primary.main', 
                    color: 'primary.contrastText', 
                    px: 3, 
                    py: 2 
                }} 
                gutterBottom
            >
                Contact Me
            </Typography>
            <Box
                component='form'
                // sx={{ '& .MuiTextField-root': { m: 1, width: '40ch' }, p: 3 }}
                sx={{ '& .shortField': { m: 1, width: '40ch' }, p: 3 }}
                autoComplete='off'
                onSubmit={handleSubmit}
            >
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        size={4}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <TextField
                            required
                            id="first-name"
                            label='First Name'
                            placeholder='First Name'
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            fullWidth
                            className="shortField"
                        />
                    </Grid>
                    <Grid
                        size={4}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <TextField
                            required
                            id='last-name'
                            label='Last Name'
                            placeholder='Last Name'
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            fullWidth
                            className="shortField"
                        />
                    </Grid>
                    <Grid
                        size={4}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <TextField
                            required
                            id='email-address'
                            label='Email Address'
                            placeholder='email@email.com'
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            fullWidth
                            className="shortField"
                        />
                    </Grid>
                </Grid>
                <Grid size={12}>
                    <TextField
                        required
                        id='email-body'
                        label='Email'
                        placeholder='Write your email here...'
                        value={message}
                        onChange={(e) => { if (e.target.value.length <= MAX) setMessage(e.target.value) }}
                        multiline
                        fullWidth
                        minRows={8}
                        helperText={`${message.length}/${MAX} characters`}
                    />
                </Grid>
                <Grid
                    size={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 1
                    }}
                >
                    <Button type='submit' variant='contained' color='primary' fullWidth>
                        Send
                    </Button>
                </Grid>
            </Box>
        </Paper>
    )
}
import * as React from 'react';
import { DownhillSkiingOutlined, MusicNoteOutlined, ComputerOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export type CardKey = 'ski' | 'sing' | 'software';

type Props = {
    keyType: CardKey;
    sx?: any;
    onAction?: (keyType: CardKey) => void;
};

const cardContents = {
    ski: {
        icon: <DownhillSkiingOutlined fontSize='large' />,
        title: 'Skiing',
        url: '/ski',
    },
    sing: {
        icon: <MusicNoteOutlined fontSize='large' />,
        title: 'Performing',
        url: '/sing',
    },
    software: {
        icon: <ComputerOutlined fontSize='large' />,
        title: 'Tech',
        url: '/tech',
    },
}

export default function SkillCard({ keyType, sx }: Props) {
    const info = cardContents[keyType];
    const navigate = useNavigate();
    const handleClick = async () => {
        navigate(info.url);
    }
    return (
        <Card elevation={5} sx={{ width: '100%', borderRadius: 4, overflow: 'hidden', ...sx }}>
            {
                <Box
                    sx={{
                        height: 160,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                    }}
                >
                    {/* clone the icon to ensure consistent size & color */}
                    {React.cloneElement(info.icon, {
                        sx: { fontSize: 56, color: 'primary.main' },
                        fontSize: undefined, // remove string-based prop if cloneElement set sx size
                    })}
                </Box>
            }
            <CardContent>
                <Typography variant='h4' component='div' gutterBottom>
                    {info.title}
                </Typography>
            </CardContent>
            <CardActions 
                sx={{ 
                    px: 2, 
                    pb: 2, 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', 
                }}
            >
                {/* <Box sx={{ flexGrow: 1 }} /> */}
                <Button
                    size='large'
                    variant='contained'
                    color='primary'
                    onClick = {handleClick}
                >
                    Dive In!
                </Button>
            </CardActions>
        </Card>
    )
}
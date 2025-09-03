import { ComputerTwoTone, DownhillSkiingTwoTone, HomeFilled, Mail, MusicNoteTwoTone } from '@mui/icons-material';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export type menuKey = 'home' | 'sing' | 'ski' | 'tech' | 'contact';

type Props = {
    keyType: menuKey,
    sx?: any,
    onAction?: (keyType: menuKey) => void;
}

const pages = {
    home: {
        title: 'Home',
        icon: <HomeFilled />,
        url:'/home'
    },
    ski: {
        title: 'Ski Instructing',
        icon: <DownhillSkiingTwoTone />,
        url: '/ski'
    },
    sing: {
        title: 'Performing',
        icon: <MusicNoteTwoTone />,
        url: '/sing'
    },
    tech: {
        title: 'Software Engineering',
        icon: <ComputerTwoTone />,
        url: '/tech'
    },
    contact: {
        title: 'Contact Me',
        icon: <Mail />,
        url: '#'
    }
}

export default function MenuItem({ keyType }: Props) {
    const pageTitle = pages[keyType];
    const navigate = useNavigate();
    const handleClick = async () => {
        navigate(pageTitle.url);
    }
    return(
        <ListItem disablePadding>
            <ListItemButton
                onClick={handleClick}
            >
                <ListItemIcon sx={{ color:'primary.main' }}>{pageTitle.icon}</ListItemIcon>
                <ListItemText primary={pageTitle.title} />
            </ListItemButton>
        </ListItem>
    )
}
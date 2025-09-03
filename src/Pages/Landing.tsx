import { Container } from '@mui/material';
import LandingHero from '../components/LandingHero';

export default function Landing() {
  return (
    <Container
      // sx={{ 
      //   backgroundImage: '../assets/snowyMountainNM.jpg',
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center',
      //   height: '100vh',
      //  }}
    >
      <LandingHero />
    </Container>
  )
}
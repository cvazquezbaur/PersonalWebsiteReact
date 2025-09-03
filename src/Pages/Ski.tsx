import { Container,} from '@mui/material';
import SkiBanner from '../components/ski/SkiBannerSection';
import SkiServiceCard from '../components/ski/SkiServiceCard';
import SkiContact from '../components/ski/SkiContact';


export default function Ski() {
    return (
        <Container>
            <SkiBanner />
            <SkiServiceCard />
            <SkiContact />
        </Container>
    )
}
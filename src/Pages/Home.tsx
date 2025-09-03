import { Box, Stack } from '@mui/material';
import Bio from '../components/HeroBio';
import CardContainer from '../components/SkillCardContainer';

export default function Home() {
    return(        
       <Box>
          <Stack spacing={3}>
            <Bio />
            <CardContainer />
          </Stack>
       </Box>
    )
}
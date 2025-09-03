import { Box, Typography } from '@mui/material';
import skiHero from '../../assets/CarlosSki.jpg';

export default function SkiBanner() {
    return(
         <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
        height: '65vh',
        borderRadius: 2,
        boxShadow: 3,
        alignItems: 'stretch',
        overflow: 'hidden', // keep outer rounded shape
        gap: 2, // space between columns (works on flex)
        p: { xs: 0, md: 1 }, // small inner padding on md+ so gap shows background between columns
      }}
    >
      {/* Image column */}
      <Box
        sx={{
          flexBasis: { xs: '100%', md: '50%' },
          flexGrow: 1,
          height: '100%',
          // ensure image wrapper itself has rounded corners and clips its content
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: 2, // rounded corners for the image itself
            overflow: 'hidden', // clip the image to the rounded corner
            // remove extra padding on mobile so stacked layout still looks good
          }}
        >
          <Box
            component="img"
            src={skiHero}
            alt="Carlos skiing"
            loading="lazy"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
      </Box>

      {/* Text column */}
      <Box
        sx={{
          flexBasis: { xs: '100%', md: '50%' },
          flexGrow: 1,
          p: { xs: 2, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          // ensure text column also respects rounded corners visually
          borderRadius: 1,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 400, mb: 2 }}>
          Having been skiing for 20 years, I offer ski instruction for all
          levels, from beginners to advanced skiers. Having trained up to PSIA
          standards, I can teach all levels in both Spanish and English, and have taught all ages from 3 to 75 years old.
          Whether you're looking to improve your technique, build confidence on
          the slopes, or learn new skills, I am here to help you reach your
          goals.
        </Typography>
      </Box>
    </Box>
    )
}
import { Divider, Typography, Grid, Paper, Box, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type performance = {
    title: string;
    role: string;
    venue: string;
    company: string;
    year: string;
}

const performances: performance[] = [
    {
        title: 'Spring Awakening',
        role: 'Moritz',
        venue: 'New Mexico Actors Lab',
        company: 'Tri-M Santa Fe',
        year: '2022'
    },
    {
        title: 'Misa Criolla',
        role: 'Tenor Soloist',
        venue: 'Lensic Theater Santa Fe',
        company: 'Santa Fe Symphony',
        year: '2025'
    },
    {
        title: 'A Funny Thing Happened on the Way to the Forum',
        role: 'Miles Gloriosus',
        venue: 'Santa Fe Playhouse',
        company: 'Tri-M Santa Fe',
        year: '2025'
    },
    {
        title: 'Chichester Psalms',
        role: 'Tenor Soloist',
        venue: 'Lensic Theater Santa Fe',
        company: 'Santa Fe Symphony',
        year: '2024'
    },
]

export default function PerformerInfo() {
    const theme = useTheme();

    return (
        <Paper elevation={1} sx={{ borderRadius: '5px', p: 5 }} >
            {/* Swiper custom styles */}
            <style>
                {`
                .swiper-button-next,
                .swiper-button-prev {
                    color: ${theme.palette.primary.main};
                }
                .swiper-pagination-bullet {
                    background: ${theme.palette.primary.main};
                    opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                    background: ${theme.palette.primary.main};
                    opacity: 1;
                }
                `}
            </style>
            <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
                Featured Performances
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                style={{ width: '100%', marginBottom: 32 }}
            >
                {performances.map((perf, idx) => (
                    <SwiperSlide key={idx}>
                        <Paper elevation={2} sx={{ p: 2, borderRadius: 3 }}>
                            <Box sx={{ mx: 5 }}>
                                <Typography variant="h6">{perf.title}</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {perf.role} | {perf.venue} | {perf.company} | {perf.year}
                                </Typography>
                            </Box>
                        </Paper>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Typography variant="h5" sx={{ fontWeight: 500, mt: 4, mb: 2 }}>
                Media & Gallery
            </Typography><Divider sx={{ mb: 3 }} /><Grid container spacing={2}>
                {/* Example gallery image */}
                <Grid size={6}>
                    <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 1 }}>
                        <img src="/gallery1.jpg" alt="Gallery" style={{ width: '100%' }} />
                    </Box>
                </Grid>
                {/* Repeat for more images */}
            </Grid>
        </Paper>
    )
}
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Typography, alpha } from '@mui/material';
import ReactPlayer from 'react-player';

export default function Hero() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 2, sm: 2 },
                pb: { xs: 2, sm: 2 },
            }}
        >
            <Stack spacing={3} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                <Typography
                    variant="h1"
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignSelf: 'center',
                        textAlign: 'center',
                        fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                        color: '#a62feb'
                    }}
                >
                    Waste&nbsp;
                    <Typography
                        component="span"
                        variant="h1"
                        sx={{
                            fontSize: 'clamp(3rem, 10vw, 4rem)',
                            color: (theme) =>
                                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                        }}
                    >
                        Revalued
                    </Typography>
                </Typography>
                <Typography
                    textAlign="center"
                    color="#FFFFFF"
                    sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                >
                    Explore our seamless transaction in delivering high-quality web3 solutions
                    tailored to your needs. Be part in the revolution of creating Waste Material Recovery Facility in your Community.
                </Typography>

            </Stack>
            <Box
                id="image"
                sx={(theme) => ({
                    mt: { xs: 2, sm: 2 },
                    alignSelf: 'center',
                    height: { xs: 252, sm: 649 },
                    width: '100%',
                    backgroundImage:
                        theme.palette.mode === 'light'
                            ? 'url("/videopicture.webp")'
                            : 'url("/videopicture.webp")',
                    backgroundSize: 'cover',
                    borderRadius: '10px',
                    outline: '1px solid',
                    outlineColor:
                        theme.palette.mode === 'light'
                            ? alpha('#BFCCD9', 0.5)
                            : alpha('#9CCCFC', 0.1),
                    boxShadow:
                        theme.palette.mode === 'light'
                            ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                            : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                })}>

                <ReactPlayer url="/intro-video.mp4" width="100%" height="720" borderRadius="10px" controls />
            </Box>
        </Container>
    );
}
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container, Stack } from '@mui/material';


const logos = [

    'https://cryptologos.cc/logos/internet-computer-icp-logo.svg',
    'data:image/png;base64,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',
    'https://pbs.twimg.com/profile_images/1763948980508196864/Dvae5ICz_400x400.jpg',
];
const logoStyle = {
    width: '100px',
    height: '80px',
    margin: '0 32px',
    opacity: 0.7,
};

export default function LogoCollection() {

    return (
        <Box id="logoCollection" sx={{ py: 4 }}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 4, sm: 3 },
                    pb: { xs: 3, sm: 2 },
                }}
            >
                <Stack spacing={3} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            fontSize: 'clamp(2rem, 10vw, 3rem)',
                            textAlign: 'center',
                            alignSelf: 'center',
                            color: (theme) =>
                                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                        }}
                    >
                        Business&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                fontSize: 'clamp(2rem, 10vw, 3rem)',
                                color: '#a62feb'
                            }}
                        >
                            Collaborators
                        </Typography>
                    </Typography>
                </Stack>

            </Container>
            <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
                {logos.map((logo, index) => (
                    <Grid item key={index}>
                        <img
                            src={logo}
                            alt={`Fake company number ${index + 1}`}
                            style={logoStyle}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
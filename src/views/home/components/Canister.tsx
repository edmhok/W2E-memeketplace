import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container, Stack } from '@mui/material';

export default function Canister() {
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
                        variant="h3"
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
                        Canister&nbsp;
                        <Typography
                            component="span"
                            variant="h3"
                            sx={{
                                fontSize: 'clamp(2rem, 10vw, 3rem)',
                                color: '#a62feb'
                            }}
                        >
                            Token
                        </Typography>
                    </Typography>
                </Stack>

            </Container>
            <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
                <Typography component="h4" variant="h4" color="text.primary">
                    W2E ( Waste2Earn )- n6j6v-cqaaa-aaaam-acjma-cai <br />
                    wPl ( Waste Plastic ) - mbbnc-biaaa-aaaam-acjiq-cai <br />
                    wPr ( Waste Paper ) - mpdak-2yaaa-aaaam-acjjq-cai <br />
                    wOx ( Waste Organic ) - mug4p-aaaaa-aaaam-acjla-cai <br />
                    wM ( Waste Metal ) - m2erh-3qaaa-aaaam-acjka-cai <br />
                    wG ( Waste Glass ) - m5fxt-wiaaa-aaaam-acjkq-cai <br />
                    eW ( electronic Waste ) - mth23-nyaaa-aaaam-acjlq-cai <br />
                </Typography>
            </Grid>
        </Box>
    )
}

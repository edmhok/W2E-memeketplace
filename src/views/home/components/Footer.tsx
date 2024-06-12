import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Footer() {
    return (
        <Container
            sx={{
                py: 3,
                mt: 'auto',
            }}
        >
            <Typography variant="h4" color="secondary" align="center">
                {'Copyright © '}
                Waste2Earn&nbsp;
                2024
            </Typography>
        </Container>
    );
}
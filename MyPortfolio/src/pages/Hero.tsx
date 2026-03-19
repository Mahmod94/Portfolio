import {
    Container,
    Typography,
    Box,
} from "@mui/material";

export default function Hero()
{
    return (
        <Box sx={{ py: 10, textAlign: "center" }}>
            <Container maxWidth="md">
                <Typography variant="h3">
                    Mahmod Mohammad
                </Typography>

                <Typography variant="h6" sx={{ mt: 2}}>
                    Software Developer
                </Typography>

                <Typography sx={{ mt: 2}}>
                    Civilingenjör student in Computer Engineering with
                    experience in Java, C, React and embedded systems.
                </Typography>
            </Container>
        </Box>
    );
}
import { Container, Typography, Box } from "@mui/material";

export default function Contact() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography>Email: ..@email.com</Typography>
        <Typography>GitHub: github.com/..</Typography>
        <Typography>LinkedIn: linkedin.com/in/..</Typography>
      </Box>
    </Container>
  );
}
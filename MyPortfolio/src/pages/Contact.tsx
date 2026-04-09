import { Container, Typography, Box, Stack, Link, Paper } from "@mui/material";

export default function Contact() {
  return (
    <Container sx={{ py: 8 }}>
      <Paper
        sx={{
          p: 4,
          borderRadius: 4,
          boxShadow: "none",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Contact
        </Typography>

        <Typography sx={{ color: "text.secondary", maxWidth: 600, mb: 3 }}>
          Feel free to reach out for opportunities, collaboration or project discussions.
        </Typography>

        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
              Email
            </Typography>
            <Link href="mailto:mahmodmamd9@gmail.com" underline="hover">
              mahmodmamd9@gmail.com
            </Link>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
              GitHub
            </Typography>
            <Link
              href="https://github.com/mahmod94"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              github.com/mahmod94
            </Link>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
              LinkedIn
            </Typography>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              
            </Link>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
}
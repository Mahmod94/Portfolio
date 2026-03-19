import { Box, Container, Typography } from "@mui/material";

export default function AboutSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>

        <Typography>
          I am a Computer Engineering student with experience in frontend
          development, Java and embedded systems. I enjoy building structured,
          practical software systems and continuously improving my technical skills.
        </Typography>
      </Container>
    </Box>
  );
}
import { Box, Button, Container, Grid, Paper, Stack, Typography, Chip } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Hero() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h2" fontWeight={700}>
              Mahmod Mohammad
            </Typography>

            <Typography
              variant="h5"
              sx={{ mt: 2, color: "text.secondary", maxWidth: 700 }}
            >
              Software Developer focused on Java, React and Embedded Systems
            </Typography>
            <Typography sx={{ mt: 3, maxWidth: 700 }}>
              I build structured software systems ranging from frontend applications to
              low-level embedded solutions, with a focus on clean architecture,
              maintainability and practical functionality.
            </Typography>

            <Typography sx={{ mt: 3, maxWidth: 700 }}>
              Computer Engineering student with experience from real 
              development environments,
              including frontend and Unity-related work at CodeX and hands-on involvement in team-based programming projects.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Button component={RouterLink} to="/projects" variant="contained">
                View Projects
              </Button>
              <Button component={RouterLink} to="/contact" variant="outlined">
                Contact Me
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" gutterBottom>
                Core Stack
              </Typography>

              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                <Chip label="Java" />
                <Chip label="React" />
                <Chip label="TypeScript" />
                <Chip label="C" />
                <Chip label="Embedded Systems" />
                <Chip label="Git" />
                <Chip label="Unity" />
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
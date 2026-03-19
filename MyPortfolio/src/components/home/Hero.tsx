import { Box, Button, Container, Grid, Paper, Stack, Typography, Chip } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Hero() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h2" fontWeight={700}>
              Mahmod
            </Typography>

            <Typography
              variant="h5"
              sx={{ mt: 2, color: "text.secondary", maxWidth: 700 }}
            >
              Software Developer focused on React, Java and Embedded Systems
            </Typography>

            <Typography sx={{ mt: 3, maxWidth: 700 }}>
              Computer Engineering student building projects in frontend development,
              object-oriented programming and low-level embedded systems.
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
                <Chip label="React" />
                <Chip label="TypeScript" />
                <Chip label="Java" />
                <Chip label="C" />
                <Chip label="Embedded Systems" />
                <Chip label="Git" />
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
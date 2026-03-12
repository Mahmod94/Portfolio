import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
} from "@mui/material";

export default function Projects() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                CodeX Platform
              </Typography>

              <Typography variant="body2" sx={{ mb: 2 }}>
                React / TypeScript / Material UI / C#
              </Typography>

              <Typography sx={{ mb: 2 }}>
                Contributed to the development of the CodeX website together
                with other team members.
              </Typography>

              <Box component="ul" sx={{ pl: 3, m: 0 }}>
                <Box component="li" sx={{ mb: 1 }}>
                  Implemented the Home page based on the provided UI design
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  Developed the About Us page
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  Built frontend components using React and Material UI
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  Connected the frontend to a simple backend service
                </Box>
                <Box component="li">
                  Worked with event data fetched from Google Calendar and shown
                  on the Home page
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                CodeX GameDevX
              </Typography>

              <Typography variant="body2" sx={{ mb: 2 }}>
                Unity / C# / Netcode for GameObjects
              </Typography>

              <Typography sx={{ mb: 2 }}>
                Contributed to the development of a Unity-based interactive
                project together with other team members.
              </Typography>

              <Box component="ul" sx={{ pl: 3, m: 0 }}>
                <Box component="li" sx={{ mb: 1 }}>
                  Implemented gaze-based interaction with objects using raycasting
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  Added object movement and sound-based feedback
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  Worked with multiplayer functionality using Unity Netcode
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  Explored cross-platform interaction between devices
                </Box>
                <Box component="li">
                  Contributed to interactive VR-style prototype behavior and testing
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Smart Greenhouse
              </Typography>

              <Typography variant="body2" sx={{ mb: 2 }}>
                C / Embedded Systems
              </Typography>

              <Typography sx={{ mb: 2 }}>
                Embedded system for monitoring greenhouse environment using
                sensors, LCD display and light control.
              </Typography>

              <Box component="ul" sx={{ pl: 3, m: 0 }}>
                <Box component="li" sx={{ mb: 1 }}>
                  Implemented temperature monitoring
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  Added light sensing and control logic
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  Built an LCD-based interface for system feedback
                </Box>
                <Box component="li">
                  Worked with embedded C and hardware interaction
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>


<Grid size={{ xs: 12, md: 6 }}>
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        2048 Game
      </Typography>

      <Typography variant="body2" sx={{ mb: 2 }}>
        Java / OOP / MVC / Swing / JUnit
      </Typography>

      <Typography sx={{ mb: 2 }}>
        Java implementation of the 2048 game with focus on modular design,
        game logic separation and object-oriented structure.
      </Typography>

      <Box component="ul" sx={{ pl: 3, m: 0 }}>
        <Box component="li" sx={{ mb: 1 }}>
          Implemented the game logic for tile movement and merging
        </Box>
        <Box component="li" sx={{ mb: 1 }}>
          Structured the project using object-oriented design principles
        </Box>
        <Box component="li" sx={{ mb: 1 }}>
          Worked with separation between model, view and controller
        </Box>
        <Box component="li">
          Added testing using JUnit for important game behaviors
        </Box>
      </Box>
    </CardContent>
  </Card>
</Grid>




<Grid size={{ xs: 12, md: 6 }}>
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Kernel OS
      </Typography>

      <Typography variant="body2" sx={{ mb: 2 }}>
        C / Operating Systems / Low-Level Programming
      </Typography>

      <Typography sx={{ mb: 2 }}>
        Academic operating systems project focused on low-level programming,
        process-related concepts and core kernel functionality.
      </Typography>

      <Box component="ul" sx={{ pl: 3, m: 0 }}>
        <Box component="li" sx={{ mb: 1 }}>
          Worked with low-level system programming in C
        </Box>
        <Box component="li" sx={{ mb: 1 }}>
          Implemented and analyzed core operating system concepts
        </Box>
        <Box component="li" sx={{ mb: 1 }}>
          Explored scheduling, memory-related behavior and system structure
        </Box>
        <Box component="li" sx={{ mb: 1 }}>
          Practiced debugging and reasoning about system-level code
        </Box>
        <Box component="li">
          Strengthened understanding of how software interacts with hardware
        </Box>
      </Box>
    </CardContent>
  </Card>
</Grid>

      </Grid>
    </Container>
  );
}
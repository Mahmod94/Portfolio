import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight={700}>
            Mahmod
          </Typography>

          <Box>
            <Button component={RouterLink} to="/">Home</Button>
            <Button component={RouterLink} to="/projects">Projects</Button>
            <Button component={RouterLink} to="/contact">Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Box>
        <Outlet />
      </Box>
    </>
  );
}
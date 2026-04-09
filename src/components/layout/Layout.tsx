import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <AppBar position="static" elevation={0} sx={{ background: "#fff", color: "#000"}}>
                <Toolbar sx={{ justifyContent: "space-between"}}>
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

            <Box>
                <Outlet />
            </Box>
        </>
    );
}
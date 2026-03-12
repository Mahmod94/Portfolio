import { Container, Typography, Card, CardContent, Grid } from "@mui/material";



export default function Projects() {
    return (
        <Container sx={{ py: 8 }}>

            <Typography variant="h4" gutterBottom>
                Projects
            </Typography>

            <Grid container spacing={3}>

                <Grid sx={{xs:12, md:6}}>
                    <Card>
                        <CardContent>

                            <Typography variant="h6">
                                CodeX Platform
                            </Typography>

                            <Typography variant="body2">
                                React / TypeScript / Material UI
                            </Typography>

                            <Typography sx={{ mt: 1}}>
                                Contributed to development of a platform connecting
                                participants eith companies and activities
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>

                <Grid sx={{xs:12, md:6}}>
                    <Card>
                        <CardContent>

                            <Typography variant="h6">
                                Smart Greenhouse
                            </Typography>

                            <Typography variant="body2">
                                C / Embedded Systems
                            </Typography>

                            <Typography sx={{ mt: 1}}>
                                Embedded system for monitoring greenhouse enviroment
                                using sensors, LCD display and light control.
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

        </Container>

    );
}
import 
{
    Container,
    Typography,
    Box
}
    from "@mui/material";

export default function Skills(){
    return (
        <Container sx={{ px: 8}}>
            
            <Typography variant="h4">
                Skills
            </Typography>

            <Box sx={{ mt: 2}}>
                Java  • C • React • TypeScript • Embedded Systems • Git
            </Box>

        </Container>
    )
}
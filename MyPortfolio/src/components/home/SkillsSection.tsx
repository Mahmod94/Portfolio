import { Box, Container, Typography, Stack, Chip } from "@mui/material";

export default function SkillsSection()
{
    const skills = [
        "React",
        "TypeScript",
        "Java",
        "C",
        "Embedded Systems",
        "Git",
        "Azure DevOps",
    ];

    return(
        <Box sx={{ py: 8 }}>
            <Container maxWidth= "md">
                <Typography variant="h4" gutterBottom>
                    Skills
                </Typography>

                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {skills.map((skill) => (
                        <Chip key={skill} label={skill} />
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
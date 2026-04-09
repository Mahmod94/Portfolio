import { Box, Container, Typography, Stack, Chip } from "@mui/material";

const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "C", "TypeScript", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React", "Material UI"],
  },
  {
    title: "Tools",
    items: ["Git", "Azure DevOps", "Swagger"],
  },
  {
    title: "Embedded",
    items: ["ARM Cortex-M3", "Interrupts", "LCD", "Sensors"],
  },
];

export default function SkillsSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>

        {skillGroups.map((group) => (
          <Box key={group.title} sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
              {group.title}
            </Typography>

            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {group.items.map((item) => (
                <Chip key={item} label={item} />
              ))}
            </Stack>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
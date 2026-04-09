import {
  Box,
  Typography,
  Chip,
  Stack,
  Button,
  Paper,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { Project } from "../../data/projectsData";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Paper
      sx={{
        p: 3,
        height: "100%",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
      }}
    >
      <Box>
        <Typography
          variant="overline"
          sx={{ color: "text.secondary", letterSpacing: 1 }}
        >
          {getProjectLabel(project.id)}
        </Typography>

        <Typography variant="h5" sx={{ mt: 1, fontWeight: 700 }}>
          {project.title}
        </Typography>

        <Typography sx={{ mt: 2, color: "text.secondary" }}>
          {project.shortDescription}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          sx={{ mt: 3 }}
        >
          {project.stack.slice(0, 3).map((tech) => (
            <Chip key={tech} label={tech} size="small" />
          ))}
        </Stack>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Button
          component={RouterLink}
          to={`/projects/${project.id}`}
          variant="text"
          sx={{ px: 0 }}
        >
          View Project →
        </Button>
      </Box>
    </Paper>
  );
}

function getProjectLabel(projectId: string) {
  switch (projectId) {
    case "codex-platform":
      return "Real-world project";
    case "smart-greenhouse":
      return "Embedded system";
    case "kernel-os":
      return "Low-level systems";
    case "game-2048":
      return "Java application";
    default:
      return "Software project";
  }
}
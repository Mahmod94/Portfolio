import { Container, Typography, Grid } from "@mui/material";
import { projectsData } from "../../data/projectsData";
import ProjectCard from "../projects/ProjectCard";

export default function FeaturedProjects() {
  const featured = projectsData.slice(0, 3);

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Featured Projects
      </Typography>

      <Grid container spacing={3}>
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Container>
  );
}
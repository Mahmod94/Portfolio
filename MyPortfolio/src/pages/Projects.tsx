import {
  Container,
  Typography,
  Grid,
} from "@mui/material";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/projects/ProjectCard";

export default function Projects() {
  return (


<Container sx={{ py: 8 }}>
  <Typography variant="h4" gutterBottom>
    Projects
  </Typography>

    <Typography sx={{ mb: 4, maxWidth: 800}}>
      A selection of projects convering frontend development, 
      embedded systems, object-oriented programming and low-level software.
    </Typography>

    <Grid container spacing={3}>
{projectsData.map((project) => (
  <ProjectCard key={project.id} project={project} />
))}
    </Grid>

</Container>
  );
}
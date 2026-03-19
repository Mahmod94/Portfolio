import {
  Container,
  Typography,
  Box,
  Chip,
  Grid,
  Card,
  CardMedia,
  Button,
  Divider,
} from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();

  const project = projectsData.find((item) => item.id === id);

  if (!project) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Project not found
        </Typography>

        <Button
          component={RouterLink}
          to="/projects"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Back to Projects
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 8 }}>
      {/* BACK BUTTON */}
      <Button component={RouterLink} to="/projects" sx={{ mb: 4 }}>
        ← Back to Projects
      </Button>

      {/* TITLE */}
      <Typography variant="h3" gutterBottom>
        {project.title}
      </Typography>

      {/* STACK */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
        {project.stack.map((tech) => (
          <Chip key={tech} label={tech} />
        ))}
      </Box>

      {/* HERO IMAGE */}
      <Card sx={{ mb: 5 }}>
        <CardMedia
          component="img"
          image={project.image}
          alt={`Main preview of ${project.title}`}
          sx={{ maxHeight: 500, objectFit: "cover" }}
        />
      </Card>

      {/* OVERVIEW */}
      <Section title="Overview">
        <Typography>{project.fullDescription}</Typography>
      </Section>

      {/* WHAT I BUILT */}
      {project.whatIBuilt && (
        <Section title="What I Built">
          <List items={project.whatIBuilt} />
        </Section>
      )}

      {/* KEY CONTRIBUTIONS */}
      <Section title="Key Contributions">
        <List items={project.highlights} />
      </Section>

      {/* TECHNICAL HIGHLIGHTS */}
      {project.technicalHighlights && (
        <Section title="Technical Highlights">
          <List items={project.technicalHighlights} />
        </Section>
      )}

      {/* CHALLENGES */}
      {project.challenges && (
        <Section title="Challenges">
          <List items={project.challenges} />
        </Section>
      )}

      {/* OUTCOME */}
      {project.outcome && (
        <Section title="Outcome">
          <Typography>{project.outcome}</Typography>
        </Section>
      )}

      {/* IMAGES */}
      {project.screenshots && project.screenshots.length > 0 && (
        <Section title="Project Images">
          <Grid container spacing={3}>
            {project.screenshots.map((screenshot, index) => (
              <Grid key={`${project.id}-${index}`} size={{ xs: 12, md: 6 }}>
                <Card>
                  <CardMedia
                    component="img"
                    image={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    sx={{ objectFit: "cover" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Section>
      )}
    </Container>
  );
}

///////////////////////////////////////////////////////////////////////////
// 🔹 Reusable Section Component
///////////////////////////////////////////////////////////////////////////

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {children}
    </Box>
  );
}

///////////////////////////////////////////////////////////////////////////
// 🔹 Reusable List Component
///////////////////////////////////////////////////////////////////////////

type ListProps = {
  items: string[];
};

function List({ items }: ListProps) {
  return (
    <Box component="ul" sx={{ pl: 3, m: 0 }}>
      {items.map((item) => (
        <Box component="li" key={item} sx={{ mb: 1 }}>
          <Typography>{item}</Typography>
        </Box>
      ))}
    </Box>
  );
}
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Button
}
    from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import type { Project } from "../../data/projectsData";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps ){
    return(
        <>
            <Card sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column"
            }}
            />
            <CardMedia
                component="img"
                height="220"
                image={project.image}
                alt={`Preview of ${project.title}`}
                sx={{ objectFit: "cover" }}
            />

            <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1}}>
                <Typography variant="h6" gutterBottom>
                    {project.title}
                </Typography>

                <Typography variant="body2" sx={{ mb: 2, color: "text.secondary"}}>
                    {project.stack.join(" / ")}
                </Typography>

            <Box component="ul" sx={{ pl: 3, mt: 0, mb: 2 }}>
                {project.highlights.slice(0, 3).map((highlight) => (
                    <Box component="li" key={highlight} sx={{ mb: 1}}>
                        <Typography variant="body2">{highlight}</Typography>
                    </Box>
                ))}
            </Box>

            <Box sx={{ mt: "auto" }}>
                <Button
                    component={RouterLink}
                    to={`/projects/${project.id}`}
                    variant="contained"
                >
                    View Project
                </Button>
            </Box>
            </CardContent>

        </>
    );
}
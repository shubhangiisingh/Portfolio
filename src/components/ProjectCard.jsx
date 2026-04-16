import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <Card 
      component={motion.div} 
      whileHover={{ y: -10 }}
      elevation={3}
      sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'background.paper', borderRadius: 2 }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
          {project.techStack.map((tech, index) => (
            <Chip key={index} label={tech} size="small" variant="outlined" color="primary" />
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button size="small" startIcon={<GitHubIcon />} href={project.githubLink} target="_blank">
          Code
        </Button>
        <Button size="small" startIcon={<OpenInNewIcon />} href={project.liveDemoLink} target="_blank">
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;

import React from 'react';
import { Container, Grid } from '@mui/material';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8, minHeight: '80vh' }}>
      <SectionTitle title="Some Things I've Built" subtitle="A selection of my recent work." />
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} lg={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;

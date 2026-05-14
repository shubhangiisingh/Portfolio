import React from 'react';
import { Container, Typography, Box, Grid, Chip } from '@mui/material';
import SectionTitle from '../components/SectionTitle';

const skills = [
  'Data Structures & Algo','C/C++','Python','JavaScript (ES6+)', 'React', 'Node.js', 'Express', 'HTML5', 'CSS3', 
  'Material UI (MUI)', 'Tailwind CSS', 'Single Page Appliucation','VS Code','Antigravity','Jupyter Notebook','Git', 'Redux', 'MongoDB', 'Rest API', 'Vercel'
];

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8, minHeight: '80vh' }}>
      <SectionTitle title="About Me" subtitle="A little bit about my background and skills." />
      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            I am a Software Developer skilled in building responsive, user-centric applications using modern web technologies. I enjoy translating ideas and designs into clean, scalable, and high-performance solutions, with a strong focus on usability and efficiency.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          I am passionate about problem-solving, solid engineering fundamentals, and continuous learning. I have also solved 250+ problems on LeetCode, which has strengthened my data structures, algorithms, and analytical thinking skills.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h6" gutterBottom color="primary">
            Technologies I've been working with recently:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
            {skills.map((skill) => (
              <Chip key={skill} label={skill} variant="outlined" color="primary" />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;

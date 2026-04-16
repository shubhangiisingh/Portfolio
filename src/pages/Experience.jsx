import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Software Developer Intern',
    company: 'BlueStock Fintech',
    duration: 'Apr 2025 - May 2025',
    description: [
      'Completed a FinTech internship at Bluestock Fintech, where I gained hands-on experience in building and optimizing web-based financial solutions. Contributed to developing responsive user interfaces and improving application performance using modern web technologies. Worked with APIs and real-time data handling, enhancing my understanding of financial systems, security considerations, and scalable application design in the fintech domain.'
    ]
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Machine Learning Center of Excellence',
    duration: 'Oct 2023 - Present',
    description: [
      'Worked as a Frontend Developer at the Machine Learning Center of Excellence, where I built responsive and intuitive user interfaces for machine learning–driven applications. Focused on translating complex ML workflows into clean, user-friendly dashboards using modern frontend technologies. Collaborated with cross-functional teams to integrate APIs, visualize data effectively, and enhance overall user experience while ensuring performance and scalability.'
    ]
  },
  {
    id: 3,
    role: 'Subject Matter Expert',
    company: 'Chegg India',
    duration: 'Apr 2023- Feb 2025',
    description: [
      'Solved 100+ academic and technical queries on Chegg with high accuracy and top ratings, delivering clear, step-by-step solutions under strict deadlines using strong engineering and analytical skills.'
    ]
  }
];

const Experience = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8, minHeight: '80vh' }}>
      <SectionTitle title="Where I've Worked" subtitle="My professional journey so far." />
      <Box sx={{ position: 'relative', ml: { xs: 2, md: 0 } }}>
        <Box sx={{ position: 'absolute', left: { xs: 0, md: '50%' }, transform: { md: 'translateX(-50%)' }, top: 0, bottom: 0, width: '2px', backgroundColor: 'primary.main', opacity: 0.3 }} />
        
        {experiences.map((exp, index) => (
          <Box key={exp.id} component={motion.div} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', mb: 6 }}>
            <Box sx={{ width: { md: '50%' }, textAlign: { md: index % 2 === 0 ? 'right' : 'left' }, order: { md: index % 2 === 0 ? 1 : 2 }, pl: { xs: 4, md: index % 2 === 0 ? 0 : 4 }, pr: { md: index % 2 === 0 ? 4 : 0 }, position: 'relative' }}>
              <Box sx={{ position: 'absolute', top: 16, right: { md: index % 2 === 0 ? '-10px' : 'auto' }, left: { xs: '-8px', md: index % 2 === 0 ? 'auto' : '-10px' }, width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'background.default', border: '4px solid', borderColor: 'primary.main', zIndex: 1 }} />
              
              <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>{exp.role}</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>{exp.company}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{exp.duration}</Typography>
              
              <Paper elevation={2} sx={{ p: 3, textAlign: 'left', backgroundColor: 'background.paper', borderRadius: 2 }}>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {exp.description.map((item, i) => (
                    <Typography component="li" variant="body2" color="text.secondary" key={i} sx={{ mb: 1 }}>{item}</Typography>
                  ))}
                </Box>
              </Paper>
            </Box>
            <Box sx={{ width: { md: '50%' }, order: { md: index % 2 === 0 ? 2 : 1 } }} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Experience;

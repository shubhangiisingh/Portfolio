import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import profileImage from '../assets/simage.jpeg';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <Box component={motion.div} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="h6" color="primary" gutterBottom>
              Hey there, I'm
            </Typography>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Shubhangi Singh.
            </Typography>
            <Typography variant="h3" color="text.secondary" sx={{ fontWeight: 'bold', mb: 3 }}>
              Software Developer
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '600px', fontSize: '1.1rem' }}>
              I’m a passionate software developer with a strong foundation in building responsive and user-friendly web applications. I specialize in modern technologies like React, JavaScript, and front-end frameworks, with a focus on creating clean, efficient, and scalable solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button component={RouterLink} to="/projects" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                View Projects
              </Button>
              <Button component={RouterLink} to="/contact" variant="outlined" size="large">
                Contact Me
              </Button>
              <Button href="/Shubhangi_Singh_Resume.pdf" target="_blank" download="Shubhangi_Resume.pdf" variant="contained" color="secondary" size="large" endIcon={<DownloadIcon />}>
                Download Resume
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box 
            component={motion.div} 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box 
              component="img"
              src={profileImage}
              alt="Profile"
              sx={{
                width: '100%',
                maxWidth: '350px',
                borderRadius: '50%',
                boxShadow: '0px 10px 30px rgba(0,0,0,0.5)',
                border: '4px solid',
                borderColor: 'primary.main',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)'
                }
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

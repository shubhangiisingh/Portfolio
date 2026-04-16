import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 4, mt: 'auto', backgroundColor: 'background.paper', textAlign: 'center' }}>
      <Typography variant="body2" sx={{ mb: 2 }} color="text.secondary">
        Developed by Shubhangi Singh. Build with React.js and Material UI. Hosted on Vercel.
      </Typography>
      <Box>
        <IconButton component={Link} href="https://github.com/shubhangiisingh" target="_blank" color="inherit">
          <GitHubIcon />
        </IconButton>
        <IconButton component={Link} href="https://www.linkedin.com/in/shubhangi-singh-2b8bb7251/" target="_blank" color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton component={Link} href="mailto:shubhangisingh0013@gmail.com" color="inherit">
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;

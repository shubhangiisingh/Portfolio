import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      sx={{ mb: 6, textAlign: 'center' }}
    >
      <Typography variant="h3" component="h2" color="primary" gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;

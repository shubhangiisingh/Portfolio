import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SectionTitle from '../components/SectionTitle';
import { certifications } from '../data/certifications';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8, minHeight: '80vh' }}>
      <SectionTitle title="Certifications" subtitle="Professional courses and credentials." />
      <Grid container spacing={4}>
        {certifications.map((cert) => (
          <Grid item xs={12} key={cert.id}>
            <Card component={motion.div} whileHover={{ x: 10 }} elevation={2} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { sm: 'center' }, p: 2 }}>
              <CardContent sx={{ pb: { xs: 0, sm: 2 }}}>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                  {cert.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {cert.organization}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Issued: {cert.date}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button variant="outlined" endIcon={<OpenInNewIcon />} href={cert.link || '#'} target={cert.link ? "_blank" : ""} disabled={!cert.link}>
                  View Credential
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Certifications;

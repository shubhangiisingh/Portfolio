import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import SectionTitle from '../components/SectionTitle';
import { achievements } from '../data/achievements';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8, minHeight: '80vh' }}>
      <SectionTitle title="Achievements" subtitle="Key highlights and milestones." />
      <Grid container spacing={4}>
        {achievements.map((achievement, index) => (
          <Grid item xs={12} sm={6} md={4} key={achievement.id}>
            <Card 
              component={motion.div} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
              elevation={2} 
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 4 }}>
                <Box sx={{ mb: 2, p: 2, borderRadius: '50%', backgroundColor: 'background.default', color: 'primary.main', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <achievement.Icon fontSize="large" />
                </Box>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {achievement.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {achievement.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Achievements;

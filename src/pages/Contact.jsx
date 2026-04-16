import React, { useState } from 'react';
import { Container, Box, TextField, Button, Paper } from '@mui/material';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. I will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8, minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SectionTitle title="Get In Touch" subtitle="My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!" />
      <Paper elevation={3} sx={{ p: 4, width: '100%', backgroundColor: 'background.paper', borderRadius: 2 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required fullWidth variant="outlined" />
          <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required fullWidth variant="outlined" />
          <TextField label="Message" name="message" value={formData.message} onChange={handleChange} required fullWidth multiline rows={4} variant="outlined" />
          <Button type="submit" variant="contained" size="large" sx={{ mt: 2 }}>
            Say Hello
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;

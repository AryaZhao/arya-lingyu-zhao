import { Container } from '@mui/material';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Internships from '../components/Internships';
import Projects from '../components/Projects';
import Flute from '../components/Flute';

const theme = createTheme({
  typography: {
    fontFamily: 'Crimson Text, serif',
  },
});

const Home = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Container maxWidth="lg">
      <Navigation />
      <Introduction />
      <Internships />
      <Projects />
      <Flute />
    </Container>
  </ThemeProvider>
);

export default Home;

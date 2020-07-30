import { Container } from '@material-ui/core';
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Internships from '../components/Internships';
import Projects from '../components/Projects';
import Flute from '../components/Flute';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Crimson Text, serif',
  },
});

const Home = () => (
  <MuiThemeProvider theme={theme}>
    <Header />
    <Container maxWidth="lg">
      <Navigation />
      <Introduction />
      <Internships />
      <Projects />
      <Flute />
    </Container>
  </MuiThemeProvider>
);

export default Home;

import { Header } from '../components/Header'
import {Navigation} from '../components/Navigation'
import {Container} from '@material-ui/core'
import React from 'react'
// import {Introduction} from '../components/Introduction'
// import {Projects} from '../components/Projects'
import {Flute} from '../components/Flute'

const Home = () => (
  
  <Container maxWidth="lg">
    <Header />
    <Navigation />
    {/* <Introduction />
      <Internships />
      <Projects /> */}
    <Flute />
  </Container>
);

export default Home;

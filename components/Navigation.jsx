import React from 'react'
import {ButtonGroup,Button } from '@material-ui/core'

export const Navigation = () => {
  return (
  <ButtonGroup size="large" fullWidth="true" variant="text" color="primary" aria-label="text primary button group">
    <Button href='/'>Home</Button>
    <Button href='#internships'>Internships</Button>
    <Button href='#projects'>Projects</Button>
    <Button href = '#flute'>Flute</Button>
  </ButtonGroup>
)}

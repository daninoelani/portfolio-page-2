import React from 'react'
import styled from 'styled-components'

const ProjectsBanner = styled.div`
    text-align: center;
    background: rgba(30,144,255,0.4);
    padding: 1em;
    margin: 1em 0;
`
const ProjectsTitle = styled.h1`
    font-size: 3em;
    padding: 1em;
`
const ProjectsStatement = styled.p`
    font-size: 1.5em;
    font-style: italic;
`

export default () => {
    return (
      <>
      <ProjectsBanner>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsStatement>See what I've been building</ProjectsStatement>
      </ProjectsBanner>
    </>
    );
  }
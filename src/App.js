import React from 'react'
import { Router, Link } from "@reach/router"
import Header from './Components/Header'
import Main from './Components/Main'
import Resume from './Components/Resume'
import Projects from './Components/Projects'


const ResumePage = () => (
  <div>
    <Resume />
  </div>
);

const HomePage = () => (
  <div>
    <Header />
    <Main />
  </div>
);

const ProjectPage = () => (
  <div>
    <Projects />
  </div>
);

export default () => {
  return (
    <>
    <nav>
      <Link to='/'>Home</Link>{' '}
      <Link to='/projects'>Projects</Link>{' '}
      <Link to="/resume">Resume</Link>
    </nav>
    <Router>
      <ResumePage path="/resume" />
      <HomePage path='/' />
      <ProjectPage path='/projects' />
    </Router>
    </>
  )
}
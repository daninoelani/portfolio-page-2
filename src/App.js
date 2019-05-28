import React from 'react'
import { Router, Link } from "@reach/router"
import Header from './Components/Header'
import Main from './Components/Main'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'


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

const ContactMePage = () => (
  <div>
    <ContactMe />
  </div>
)

export default () => {
  return (
    <>
    <nav>
      <Link to='/'>Home</Link>{' '}
      <Link to='/projects'>Projects</Link>{' '}
      <Link to='/resume'>Resume</Link>{' '}
      <Link to='/contactme'>Contact Me</Link>
    </nav>
    <Router>
      <ResumePage path="/resume" />
      <HomePage path='/' />
      <ProjectPage path='/projects' />
      <ContactMePage path='/contactme' />
    </Router>
    </>
  )
}
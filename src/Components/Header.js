import React from 'react'
import styled from 'styled-components'

const Name = styled.h1`
    font-size: 5em;
    text-align: center;
    padding: 1em 0 1em 0;
    margin: 0.2em;
`
const Statement = styled.p`
    font-size: 2em;
    text-align: center;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 2em;
    padding-top: 1em;
`
const Jumbotron = styled.div`
    background: rgba(34, 139, 34, 0.4);
`
const About = styled.h2`
    text-align: center;
    font-size: 2em;
`
const AboutSentence = styled.p`
    font-size: 1.5em;
    text-align: center;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 2em;
    padding-top: 1em;
`

export default () => {
    return (
        <>
            <Jumbotron>
                <Name>Dani Sadorf</Name>
                <Statement>A lifelong learner with a passion for the outdoors,
                    I am dedicated to improving my community through
        technology.</Statement>
            </Jumbotron>
            <About>About Me</About>
            <AboutSentence>I have dedicated my life to service, from disaster response to working as a wildland firefighter to building homes
                with Habitat for Humanity. I have spent several years in hospitality and customer service, spending time at a ski resort,
                a hostel, and a tour company. I am now pursuing a career in web development in order to create and improve programs that
            make life better for everyone.</AboutSentence>
        </>
    )
}
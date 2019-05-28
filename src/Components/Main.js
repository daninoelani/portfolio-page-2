import React from 'react'
import styled from 'styled-components'

const Skills = styled.p`
  font-size: 1em;
  text-align: justify;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2em;
  padding-top: 1em;
`
const SkillHeadings = styled.h2`
  font-size: 1.5em;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 1em;
  padding-top: 1em;
`
const SkillTitle = styled.h2`
  font-size: 2em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: 2em 0 0 0;
`
const SkillSection = styled.section`
  background: rgba(138, 43, 226, 0.4);
  padding: 0 1em;
`

export default () => {
  return (
    <>
      <SkillSection>
        <SkillTitle>Skills</SkillTitle>
      <div className="leadership">
          <SkillHeadings>Leadership</SkillHeadings>
          <Skills>While working as a tour leader, I was regularly tasked
          with leading groups of 5-13 travelers from varying countries,
          including safety briefings before hiking days and history
          briefings for American cities. I also handled all logistics
          for the trips and consistently searched for new things to share
          with my groups. As a divemaster intern in Malaysia, I was
          responsible for briefing divers and managing everyone underwater.
          I made the trip enjoyable and showed divers the great sea life
          while also checking on safe diving practices and controlling the
          group’s movement. I have also taught karate, dance classes,
        kickboxing and environmental education.</Skills>
        </div>
        <div className="Communication">
          <SkillHeadings>Communication</SkillHeadings>
          <Skills>While working with both the International Rescue Committee
            and as a resource education intern, I have spent many hours
            speaking in front of large groups of up to 60 students, often
            times with little guidance or supervision. I have managed volunteers
            for three different non-profit organizations, including recruitment,
          training, safety briefings, and coordinating tasks for the volunteers.</Skills>
        </div>
        <div className="Technology">
          <SkillHeadings>Technology</SkillHeadings>
          <Skills>Prior to enrolling in a fullstack bootcamp, I had spent three years
            slowly experimenting with HTML, CSS, JavaScript, Python and R Studio.
            I am proficient in ArcGIS, I have learned data science through R Studio
            and Python, and I am learning basic UX design principles to compliment
          my fullstack knowledge. </Skills>
        </div>
      </SkillSection>
    </>
  )
}
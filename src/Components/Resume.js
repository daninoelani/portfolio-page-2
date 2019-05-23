import React from 'react'
import styled from 'styled-components'

const ResPage = styled.section`
  font-size: 1em;
  text-align: justify;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2em;
  padding-top: 1em;
`
const ResTitle = styled.h2`
  background: rgba(138, 43, 226, 0.4);
  font-size: 3em;
  padding: 1em;
  text-align: center;
`
const JobTitles = styled.h5`
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: .2em;
`

export default () => {
  return (
    <>
      <ResPage>
        <ResTitle>Resume</ResTitle>
        <div>
          <JobTitles>Slope Maintenance Technician and Guest Services Attendant | Solitude Mountain Resort | Dec 2017 - Apr 2019</JobTitles>
          <ul>
            <li>Responsible for operating a Sno-Cat to groom ski runs across the resort</li>
            <li>Displayed strong attention to detail; daily checks and basic maintenance of heavy equipment</li>
            <li>Helped guests with any questions about the resort</li>
          </ul>
          <JobTitles>Tour Leader | AmeriCan Adventures | May 2017 - Sept 2018</JobTitles>
          <ul>
            <li>Led groups of international passengers on cross-country trips while following DOT safety guidelines as a professional driver</li>
            <li>Handled all logistics, including making reservations for extra activities and campgrounds, balancing food purchasing money, planning driving routes, making optional fun stops and remotely coordinating upcoming trips with management</li>
          </ul>
          <JobTitles>Fitness Instructor | ILoveKickboxing.com South Jordan | Aug 2016 - Apr 2017</JobTitles>
          <ul>
            <li>Taught kickboxing classes to large groups of members, checking for safe movements and encouraging everyone to work hard</li>
            <li>Discussed membership options and assessed fitness goals to create personalized goals, helping all members  achieve their best results</li>
          </ul>
          <JobTitles>Health Outreach AmeriCorps VISTA | International Rescue Committee, Salt Lake City | Apr - Oct 2016</JobTitles>
          <ul>
            <li>Facilitated healthcare access for newly arrived refugees</li>
            <li>Oversaw the health mentor volunteer program, a program that matched struggling clients with a mentor to help understand the healthcare system and learn to get to medical appointments</li>
            <li>Recruited and trained volunteers and interns</li>
          </ul>
          <JobTitles>Fire Technician 1 | Utah Department of Natural Resources | Mar - Oct 2015</JobTitles>
          <ul>
            <li>Served as a member of a 23-person hotshot wildland firefighting crew to suppress forest fires throughout the western US</li>
            <li>Worked in a position that required strong teamwork and perseverance to achieve goals set out by incident command</li>
          </ul>
          <JobTitles>Forestry Technician, Fire | USDA Forest Service, Entiat Ranger District | May - Oct 2014</JobTitles>
          <ul>
            <li>Served as a member of a 5-person engine crew member to suppress forest fires throughout Washington</li>
          </ul>
          <JobTitles>Emergency Response Team Member | AmeriCorps St Louis | Aug 2012 - Aug 2013</JobTitles>
          <ul>
            <li>Managed groups of up to 20 volunteers to clean up houses in the wake of superstorm Sandy</li>
            <li>Maintained spreadsheets to track progress of debris clean-up and log of all contact with homeowners</li>
            <li>Adapted to constantly varied assignments throughout the state with different conservation areas</li>
          </ul>
        </div>
      </ResPage>
    </>
  )
}
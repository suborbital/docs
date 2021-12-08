import React from 'react'
import { Link } from '../link'
import { Paragraph, SubHeading } from '../texts'
import '../../css/home.css'
import { OpenSourceProjects, OtherOfferings } from './data'
import useBaseUrl from '@docusaurus/useBaseUrl'

const Projects = ({ type }) => {
  return (
    <>
      {type === 'OpenSourceProjects' ? (
        <div style={{ marginTop: '3rem' }}>
          <b><SubHeading>Our Open Source projects</SubHeading></b>
          <div className="grid">
            {OpenSourceProjects.map(OpenSourceProject => (
              <div className="OpenSourceProjectsDiv">
                <img className="OpenSourceProjectLogo" src={useBaseUrl(OpenSourceProject.icon)} alt={OpenSourceProject.icon} />
                <br />
                <Link className="subHeadingOS" to={OpenSourceProject.url}>
                  <b>{OpenSourceProject.heading}</b>
                </Link>
                <Paragraph>{OpenSourceProject.description}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '5rem' }}>
          <SubHeading>Other Offerings from Suborbital</SubHeading>
          <div className="grid">
            {OtherOfferings.map(OtherOffering => (
              <div className="OtherOfferingsDiv">
                <img className="OtherOfferingsLogo"src={useBaseUrl(OtherOffering.icon)} alt={OtherOffering.icon} />
                <br />
                <Link className="subHeadingOO" to={OtherOffering.url}>
                  <b>{OtherOffering.heading}</b>
                </Link>
                <Paragraph>{OtherOffering.description}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export { Projects }

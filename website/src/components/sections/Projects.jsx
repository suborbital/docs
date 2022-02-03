import React from 'react'
import { Link } from '../link'
import { Paragraph, SubHeading } from '../texts'
import '../../css/home.css'
import { PrimaryOfferings, OtherOfferings } from './data'
import useBaseUrl from '@docusaurus/useBaseUrl'

const Projects = ({ type }) => {
  return (
    <>
      {type === 'PrimaryOfferings' ? (
        <div style={{ marginTop: '4rem' }}>
          <SubHeading>Our projects</SubHeading>
          <div className="grid">
            {PrimaryOfferings.map(PrimaryOffering => (
              <div className="PrimaryOfferingsDiv">
                <Link className="PrimaryOfferingsLogo" to={PrimaryOffering.url}>
                  <img className="PrimaryOfferingsLogo" src={useBaseUrl(PrimaryOffering.icon)} alt={PrimaryOffering.icon} />
                </Link>
                <Link className="subHeadingPO" to={PrimaryOffering.url}>
                  <b>{PrimaryOffering.heading}</b>
                </Link>
                <Paragraph>{PrimaryOffering.description}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '2rem' }}>
          <SubHeading>Building Blocks</SubHeading>
          <div className="grid">
            {OtherOfferings.map(OtherOffering => (
              <div className="OtherOfferingsDiv">
               <Link className="OtherOfferingsLogo" to={OtherOffering.url}>
                <img className="OtherOfferingsLogo" src={useBaseUrl(OtherOffering.icon)} alt={OtherOffering.icon} />
               </Link>
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

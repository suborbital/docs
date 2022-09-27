import React from 'react'
import { Link } from '../link'
import { Paragraph, SubHeading } from '../texts'
import '../../css/home.css'
import { FlagshipProjects} from './data'
import useBaseUrl from '@docusaurus/useBaseUrl'

const Projects = ({ type }) => {
  return (
    <>
      {type === 'flagship' ? (
        <div style={{ marginTop: '4rem' }}>
          <SubHeading>
            Open Source Projects
          </SubHeading>
          <div className="grid">
            {FlagshipProjects.map(project => (
              <div className="home__flagship__item" key={project.key}>
                <Link className="home__flagship__logo" to={useBaseUrl(project.url)}>
                  <img className="home__flagship__logo" src={useBaseUrl(project.icon)} alt={project.icon} />
                </Link>
                <Link className="subHeadingPO" to={useBaseUrl(project.url)}>
                  <b>{project.heading}</b>
                </Link>
                <Paragraph>{project.description}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '2rem' }}>
        </div>
      )}
    </>
  )
}

export { Projects }

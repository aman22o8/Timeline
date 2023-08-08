// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  console.log(projectDetails)
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project_container">
      <img className="image_project" src={imageUrl} alt="project" />
      <div className="header_container_project">
        <h1 className="heading_project">{projectTitle}</h1>
        <div className="calender_container">
          <AiFillCalendar className="calender_icon" />
          <p className="calender_time">{duration}</p>
        </div>
      </div>
      <p className="description_project">{description}</p>
      <a href={projectUrl} className="my_link" target="_blank" rel="noreferrer">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard

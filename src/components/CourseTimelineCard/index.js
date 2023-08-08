// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  console.log(courseDetails)
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course_container">
      <div className="header_container">
        <h1 className="heading_course">{courseTitle}</h1>
        <div className="clock_container">
          <AiFillClockCircle className="clock_icon" />
          <p className="clock_time">{duration}</p>
        </div>
      </div>

      <p className="description_course">{description}</p>
      <ul className="skills_container">
        {tagsList.map(eachlist => (
          <li key={eachlist.id}>
            <p className="my_skills">{eachlist.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard

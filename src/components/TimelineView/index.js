// Write your code here
import './index.css'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const rendermyfunction = ItemsList => {
    if (ItemsList.categoryId === 'COURSE') {
      return <CourseTimelineCard key={ItemsList.id} courseDetails={ItemsList} />
    }
    return <ProjectTimelineCard key={ItemsList.id} projectDetails={ItemsList} />
  }

  return (
    <div className="main_container">
      <h1 className="main_heading">
        My JOURNEY OF <br /> CCBP 4.0{' '}
      </h1>
      <Chrono
        theme={{
          secondary: 'white',
        }}
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(each => rendermyfunction(each))}
      </Chrono>
    </div>
  )
}

export default TimelineView

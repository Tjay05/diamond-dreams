import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io"

import back from '../../assets/icons/back-arrow.svg'

const CourseDetails = () => {
  const [expandedModule, setExpandedModule] = useState(null);

  const history = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();

  if (!state || !state.course) return <>
    <img src={back} alt='Back' onClick={() => history(-1)} />
    <h2>Course not Found</h2>
  </>;

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <>
      <nav className="btmNav courseDetail">
        <img src={back} alt='Back' onClick={() => history(-1)} />
        <h1>{ state.course.title }</h1>
      </nav>
      <h2 className="syllabus">Syllabus: What you will learn in this course</h2>
      {state.course.modules.map((module) => (
      <div className="courseDetails" key={module.id}>
        <li>
          <p>MODULE { module.id }</p> 
          <strong>{module.title}</strong>
          <IoIosArrowDown 
            size={20} 
            color='#5c0002'
            onClick={() => toggleModule(module.id)} 
          />
        </li>
        <ul className={expandedModule === module.id ? `expandedModule`: ``}>
          {module.lessons.map((lesson) => (
            <li key={lesson.id}>
              <strong>{ lesson.title }</strong> - { lesson.content }
            </li>
          ))}
        </ul>
      </div>
      ))}
    </>
  );
}
 
export default CourseDetails;
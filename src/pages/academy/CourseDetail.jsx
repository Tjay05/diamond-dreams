import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import back from '../../assets/icons/back-arrow.svg'
import courses from "../../data/Course";

const CourseDetails = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedModule, setExpandedModule] = useState(null);

  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const course = Object.values(courses).find((c) => c.id === parseInt(id));

  if (!course) return <>
    <img src={back} alt='Back' onClick={() => history(-1)} />
    <h2>Course not Found</h2>
  </>;

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <>
      {!isMobile && (
        <header className="studentHeader">
          <div className="headerWrapper">
            <nav className="top-Header">
              <div className="head-wrap">
                <img src={back} alt='Back' onClick={() => history(`/student`)} />
                <h1>{ course.title }</h1>
              </div>
            </nav>
          </div>
        </header>
      )}
      <section className="studSection">
        {isMobile && (
          <nav className="btmNav courseDetail">
            <img src={back} alt="Back" onClick={() => history(`/student`)} />
            <h1>{ course.title }</h1>
          </nav>
        )}
        <h2 className="syllabus">Syllabus: What you will learn in this course</h2>
        {course.modules.map((module) => (
        <div className="courseDetails" key={module.id}>
          <li>
            <p>MODULE { module.id }</p> 
            <strong>{module.title}</strong>
            {expandedModule === module.id ? (
              <IoIosArrowUp
                size={20}
                color="#5c0002"
                onClick={() => toggleModule(module.id)} 
              />
            ) : (
              <IoIosArrowDown 
                size={20} 
                color='#5c0002'
                onClick={() => toggleModule(module.id)} 
              />
            )}
          </li>
          <ul className={expandedModule === module.id ? `expandedModule`: ``}>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                <Link to={`module/${module.id}/lesson/${lesson.id}`}>
                  <strong>{ lesson.title }</strong> - { lesson.brief }
                </Link>
              </li>
            ))}
          </ul>
        </div>
        ))}
      </section>
    </>
  );
}
 
export default CourseDetails;
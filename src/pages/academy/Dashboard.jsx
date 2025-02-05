import { useNavigate } from "react-router-dom";
import courses from "../../data/Course";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const handleClick = (course) => {
    navigate(`course/${course.id}`, 
      { state: { course } }
    );
  };

  return (
    <>
      <section className="courses">
        <nav className="studNav">
          <ul>
            <li>
              <h1>New Courses</h1>
            </li>
            <li>
              <p>See all</p>
            </li>
          </ul>
        </nav>
        <div className="courseSection">
          {Object.values(courses).map((course) => (
            <article key={course.id} onClick={() => handleClick(course)}>
              <img src={course.image} alt="" />
              <h2>{course.title}</h2>
              <p className="source">{course.source}</p>
            </article>
          ))}
        </div>
      </section>
      {/* <section className="courses">
        <nav className="studNav">
          <ul>
            <li>
              <h1>Earn a Certificate</h1>
            </li>
            <li>
              <p>See all</p>
            </li>
          </ul>
        </nav>
        <div className="courseSection">
          <article>
            <img src={CoverImg} alt="" />
            <h2>Certificate in Art</h2>
          </article>
          <article>
            <img src={CoverImg} alt="" />
            <h2>Honour in Decoration</h2>
          </article>
        </div>
      </section> */}
    </>
  );
}
 
export default StudentDashboard;
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { FaSearch, FaFire, FaBookOpen, FaChartBar } from "react-icons/fa";
import courses from "../../data/Course";
import image from "../../assets/images/academy.jpeg";

const ongoingCourses = [
  { id: 101, title: "React for Beginners", progress: 70, image },
  { id: 102, title: "Advanced Node.js", progress: 50, image },
  { id: 103, title: "UI/UX Mastery", progress: 85, image }
];

const StudentDashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [seeAll, setSeeAll] = useState(false);
  const [streak, setStreak] = useState(5);
  const [enrolledCourses, setEnrolledCourses] = useState(10);
  const [overallProgress, setOverallProgress] = useState(65);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (course) => {
    navigate(`course/${course.id}`, { state: { course } });
  };

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) =>
      i < rating ? (
        <BsStarFill key={i} className="star filled" />
      ) : (
        <BsStar key={i} className="star" />
      )
    );

  const filteredCourses = Object.values(courses).filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {!isMobile && (
        <header className="studentHeader">
          <div className="headerWrapper">
            <nav className="top-Header">
              <h1>Dashboard</h1>
              <div className="search-bar">
                <FaSearch size={20} className="search-icon" />
                <input
                  placeholder="Search for courses..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </nav>
          </div>
        </header>
      )}
      <section className="dashboard studSection">
        <header className="dashboard-header">
          <h1>Welcome, Toppins</h1>
          <p>Continue your learning journey</p>
        </header>

        {/* Learning Streak */}
        <div className="streak">
          <FaFire className="fire-icon" />
          <span>You have a {streak}-day learning streak!</span>
        </div>

        {/* Enrollment and Progress Overview */}
        <div className="enrollment-progress">
          <div className="enrollment-box">
            <FaBookOpen className="enrollment-icon" />
            <div>
              <h3>{enrolledCourses}</h3>
              <p>Enrolled Courses</p>
            </div>
          </div>
          <div className="progress-box">
            <FaChartBar className="progress-icon" />
            <div>
              <h3>{overallProgress}%</h3>
              <p>Overall Progress</p>
            </div>
          </div>
        </div>

        {/* Continue Learning */}
        <section className="continue-courses">
          <h2>Continue Learning</h2>
          <div className="courseSection">
            {ongoingCourses.map((course) => (
              <article key={course.id} onClick={() => handleClick(course)}>
                <img
                  src={course.image}
                  className="ongoing-image"
                  alt={course.title}
                />
                <h2>{course.title}</h2>
                <p>Progress: {course.progress}%</p>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* New Courses */}
        <section className="courses">
          <nav className="studNav">
            <ul>
              <li>
                <h2>New Courses</h2>
              </li>
              {filteredCourses.length > 3 && (
                <li>
                  <p className="see-all" onClick={() => setSeeAll(!seeAll)}>
                    {seeAll ? "Show Less" : "See All"}
                  </p>
                </li>
              )}
            </ul>
          </nav>

          <div className="courseSection">
            {(seeAll ? filteredCourses : filteredCourses.slice(0, 3)).map(
              (course) => (
                <article key={course.id} onClick={() => handleClick(course)}>
                  <img src={course.image} alt={course.title} />
                  <h2>{course.title}</h2>
                  <p className="source">{course.source}</p>
                  <div className="stars">{renderStars(course.rating)}</div>
                </article>
              )
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default StudentDashboard;

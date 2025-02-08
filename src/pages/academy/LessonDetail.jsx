import { useNavigate, useParams } from "react-router-dom";
import courses from "../../data/Course";
import back from "../../assets/icons/back-arrow.svg";

const LessonDetail = () => {
  const { courseId, moduleId, lessonId } = useParams();
  const navigate = useNavigate();

  // course
  const course = Object.values(courses).find(
    (c) => c.id === parseInt(courseId)
  );
  if (!course)
    return (
      <div className="error-container">
        <img src={back} alt="Back" onClick={() => navigate(-1)} />
        <h2>Course not Found</h2>
      </div>
    );

  // module
  const module = course.modules.find((m) => m.id === parseInt(moduleId));
  if (!module)
    return (
      <div className="error-container">
        <img src={back} alt="Back" onClick={() => navigate(-1)} />
        <h2>Module not Found</h2>
      </div>
    );

  // lesson
  const lessonIndex = module.lessons.findIndex((l) => l.id === lessonId);
  if (lessonIndex === -1)
    return (
      <div className="error-container">
        <img src={back} alt="Back" onClick={() => navigate(-1)} />
        <h2>Lesson not Found</h2>
      </div>
    );

  const lesson = module.lessons[lessonIndex];

  const goToPrevLesson = () => {
    if (lessonIndex > 0) {
      const prevLesson = module.lessons[lessonIndex - 1];
      navigate(
        `/student/course/${course.id}/module/${module.id}/lesson/${prevLesson.id}`
      );
    } else {
      navigate(`/student/course/${course.id}`);
    }
  };

  const goToNextLesson = () => {
    if (lessonIndex < module.lessons.length - 1) {
      const nextLesson = module.lessons[lessonIndex + 1];
      navigate(
        `/student/course/${course.id}/module/${module.id}/lesson/${nextLesson.id}`
      );
    } else {
      navigate(`/student/course/${course.id}`);
    }
  };

  return (
    <div className="lesson-container">
      {/* Fixed Header */}
      <nav className="lesson-header">
        <img
          src={back}
          alt="Back"
          className="back-button"
          onClick={() => navigate(`/student/course/${course.id}`)}
        />
        <h2 className="lesson-title">{lesson.title}</h2>
      </nav>

      {/* Video Player */}
      {lesson.youtubeLink && (
        <div className="video-container">
          <iframe
            width="100%"
            height="400px"
            src={`https://www.youtube.com/embed/${lesson.youtubeLink
              .split("/")
              .pop()}`}
            title={lesson.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Lesson Content */}
      <div className="lesson-content">
        <p>{lesson.content}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="nav-btns">
        <button onClick={goToPrevLesson} disabled={lessonIndex === 0}>
          {lessonIndex === 0 ? "Back to Course" : "Previous Lesson"}
        </button>
        <button onClick={goToNextLesson}>
          {lessonIndex === module.lessons.length - 1
            ? "Back to Course"
            : "Next Lesson"}
        </button>
      </div>
    </div>
  );
};

export default LessonDetail;

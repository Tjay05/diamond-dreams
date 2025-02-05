import { useNavigate, useParams } from "react-router-dom";
import courses from "../../data/Course";

import back from '../../assets/icons/back-arrow.svg'

const LessonDetail = () => {
  const { courseId, moduleId, lessonId } = useParams();
  const navigate = useNavigate();

  // course
  const course = Object.values(courses).find((c) => c.id === parseInt(courseId));
  if (!course) return <>
    <img src={back} alt='Back' onClick={() => history(-1)} />
    <h2>Course not Found</h2>
  </>;
  // module
  const module = course.modules.find((m) => m.id === parseInt(moduleId));
  if (!module) return <>
    <img src={back} alt='Back' onClick={() => history(-1)} />
    <h2>Module not Found</h2>
  </>;
  // lesson
  const lessonIndex = module.lessons.findIndex((l) => l.id === lessonId);
  if (lessonIndex === -1) return <>
    <img src={back} alt='Back' onClick={() => history(-1)} />
    <h2>Lesson not Found</h2>
  </>;

  const lesson = module.lessons[lessonIndex];

  const goToPrevLesson = () => {
    if (lessonIndex > 0) {
      const prevLesson = module.lessons[lessonIndex - 1];
      navigate(`/student/course/${course.id}/module/${module.id}/lesson/${prevLesson.id}`);
    } else {
      navigate(`/student/course/${course.id}`);
    }
  };

  const goToNextLesson = () => {
    if (lessonIndex < module.lessons.length - 1) {
      const nextLesson = module.lessons[lessonIndex + 1];
      navigate(`/student/course/${course.id}/module/${module.id}/lesson/${nextLesson.id}`);
    } else {
      navigate(`/student/course/${course.id}`);
    }
  };

  return (
    <>
      <h2 className="lesson-title">{ lesson.title }</h2>
      <p className="lesson-content">{ lesson.content }</p>
      <div className="nav-btns">
        <button
          onClick={goToPrevLesson}
          disabled={lessonIndex === 0}
        >
          {lessonIndex === 0 ? 'Back to Course' : 'Previous Lesson'}
        </button>
        <button onClick={goToNextLesson}>
          {lessonIndex === module.lessons.length -1  ? 'Back to Course' : 'Next Lesson'}
        </button>
      </div>
    </>
  );
}
 
export default LessonDetail;
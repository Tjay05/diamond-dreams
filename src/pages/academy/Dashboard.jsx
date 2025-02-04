import { useNavigate } from "react-router-dom";
import CoverImg from "../../assets/images/blue-bg.jpg";
const courseData = [
  {
    id: 1,
    title: 'Art in Fashion',
    source: 'Tjay',
    image: CoverImg,
  },
  {
    id: 2,
    title: 'Detailed Beauty',
    source: 'Topins',
    image: CoverImg,
  },
  {
    id: 3,
    title: 'Elegance in Style',
    source: 'Dublin Art',
    image: CoverImg,
  }
]

const StudentDashboard = () => {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`course/${item.id}`, 
      { state: { item } }
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
          {courseData.map((item) => (
            <article key={item.id} onClick={() => handleClick(item)}>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p className="source">{item.source}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="courses">
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
      </section>
    </>
  );
}
 
export default StudentDashboard;
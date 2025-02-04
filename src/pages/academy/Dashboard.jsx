import CoverImg from "../../assets/images/blue-bg.jpg";

const StudentDashboard = () => {
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
          <article>
            <img src={CoverImg} alt="" />
            <h2>Art in Fashion</h2>
            <p className="source">Tjay</p>
          </article>
          <article>
            <img src={CoverImg} alt="" />
            <h2>Detailed Beauty</h2>
            <p className="source">Tjay</p>
          </article>
          <article>
            <img src={CoverImg} alt="" />
            <h2>Art in Fashion</h2>
            <p className="source">Tjay</p>
          </article>
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
import "./About.css";
import builsding4 from "../../../assets/icons/5.png";
import builsding1 from "../../../assets/icons/1.svg";
import builsding2 from "../../../assets/icons/3.png";
import builsding3 from "../../../assets/icons/as.svg";
import Footer from "../Home/Sections/Footer";
import Navbar from "../../navbar/Navbar";
import AboutCard from "./AboutCard";
import HeadTitle from "../../navbar/HeadTitle/HeadTitle";


const About = () => {
  return (
    <main>
      <Navbar />
      <HeadTitle />

      <section className="about top">
        <div className="container">
          <AboutCard />
        </div>
      </section>

      <section className="features top">
        <div className="container aboutCard flex_space">
          <div className="row row1">
            <h1>
              Our <span>Vision</span>
            </h1>
            <p>
              TO BE THE PREFFERED TRAVEL SERVICE PROVIDER IN AFRICA WITH BRANCHES ACROSS THE CONTINENT
            </p>
          </div>
          <div className="row image">
            <img src={builsding1} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="aboutCard mtop flex_space">
          <div className="row row1">
            <h1>
              Our <span>Mission</span>
            </h1>
            <p>
              TO PROVIDE UNIQUE TAILOR MADE AND QUALITY TRAVEL SOLUTIONS TO ALL STAKEHOLDERS.
              <br />
              <br />

              TO ENSURE THAT ALL SERVICES  PROVIDED BY OUR BUSINESS PARTNERS ARE
              VALUE FOR MONEY AND QUALITY TO ALL THE STAKEHOLDERS.
            </p>
          </div>
          <div className="row imasge">
            <img src={builsding3} alt="" />
          </div>
        </div>
      </section>
      <section className="features top">
        <div className="container aboutCard flex_space">
          <div className="row row1">
            <h1>
              Our <span>Values</span>
            </h1>
            <h4>
              RELIABLE
            </h4>
            <h4>
              PROFESSIONAL
            </h4>
            <h4>
              RESPONSIVE
            </h4>
            <h4>
              FLEXIBLE
            </h4>
          </div>
          <div className="row imagess">
            <img src={builsding2} alt="" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;

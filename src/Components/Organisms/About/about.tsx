import "./about.scss";
import Grid from "../../molecules/grid-images/grid";

interface AboutData {
  title: string;
  subTitle: string;
  text: string;
  top: string;
  bottom: string;
  altTagBack: string;
  altTagFront: string;
}

const About = (props: AboutData) => {
  return (
    <div className="about-container">
      <Grid
        altTagBack={props.altTagBack}
        top={props.top}
        bottom={props.bottom}
        altTagFront={props.altTagFront}
      />
      <div className="about">
        <h1 className="about__title">{props.title}</h1>
        <h5 className="about__subtitle">{props.subTitle}</h5>
        <p className="about__paragraph">{props.text}</p>
      </div>
    </div>
  );
};

export default About;

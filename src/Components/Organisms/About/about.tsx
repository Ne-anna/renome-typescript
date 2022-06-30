import "../About/about.scss";
import Grid from "../../Molecules/grid-images/grid";

interface AboutData {
  title: string;
  subTitle: string;
  text: string;
  topImage: string;
  backImage: string;
  altTagBack: string;
  altTagFront: string;
}

const About = (props: AboutData) => {
  return (
    <div className="about-container">
      <Grid
        altTagBack={props.altTagBack}
        topImage={props.topImage}
        backImage={props.backImage}
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

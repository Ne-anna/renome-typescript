import "../Footer/footer.scss";
import { FooterData } from "../../../data";

const Footer = (props: FooterData) => {
  return (
    <div className="footer">
      <h5 className="footer__title">{props.title}</h5>
      <div className="footer__social-media"></div>

      <h2 className="footer__logo">{props.logo}</h2>
      <h5 className="footer_copyright">{props.copyright}</h5>
    </div>
  );
};
export default Footer;

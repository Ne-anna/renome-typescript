import "../Footer/footer.scss";
import { FooterData } from "../../../data";
import FooterIcons from "../../Molecules/footer-icons/footer-icons";

const Footer = (props: FooterData) => {
  return (
    <div className="footer">
      <h5 className="footer__title">{props.title}</h5>
      <div className="footer__social-media">
        <div className="footer__icon">
          {props.footerIcons.map((items, index) => {
            return (
              <FooterIcons
                icon={items.icon}
                altTag={items.altTag}
                id={items.id}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <h2 className="footer__logo">{props.logo}</h2>
      <h5 className="footer_copyright">{props.copyright}</h5>
    </div>
  );
};
export default Footer;

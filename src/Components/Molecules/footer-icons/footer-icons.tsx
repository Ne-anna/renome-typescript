import { FooterIcon } from "../../../data";

const FooterIcons = (props: FooterIcon) => {
  return <img src={props.icon} alt={props.altTag} />;
};

export default FooterIcons;

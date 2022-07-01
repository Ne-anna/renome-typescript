import { GalleryImage } from "../../../data";

const GalleryImages = (props: GalleryImage) => {
  return <img src={props.path} alt={props.altTag} />;
};

export default GalleryImages;

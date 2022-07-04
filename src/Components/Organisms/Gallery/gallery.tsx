import "../Gallery/gallery.scss";
import { GalleryData } from "../../../data";
import GalleryImages from "../../Molecules/gallery-images/gallery-images";

const Gallery = (props: GalleryData) => {
  return (
    <div className="gallery">
      <h1 className="gallery__title">{props.title}</h1>
      <h5 className="gallery__subtitle">{props.subTitle}</h5>

      <div className="gallery__image-container">
        {props.galleryImages.map((items, index) => {
          return (
            <GalleryImages
              path={items.path}
              altTag={items.altTag}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;

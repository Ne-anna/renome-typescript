export interface Cart {
  cart: CartItem[];
}

export interface CartItem {
  item: string;
}

export interface NavigationData {
  logo: string;
  cartPath: string;
  altTagCart: string;
  count: string;
  dividerPath: string;
  altTagDivider: string;
}

export interface SubMenu {
  title: string;
  url: string;
}

export interface Menu {
  title: string;
  buttonSearchPath: string;
  searchAltTag: string;
  url: string;
  buttonNextPath: string;
  buttonNextAltTag: string;
  isSubMenu?: boolean;
  subMenu: SubMenu[];
}

export interface BackButtonTitle {
  title: string;
  buttonBackPath: string;
  buttonBackAltTag: string;
}

export interface Carousel {
  title: string;
  subTitle: string;
  altTag: string;
  path: string;
}

export interface CarouselButtons {
  carouselButtonNext: string;
  altTagNext: string;
  carouselButtonPrevious: string;
  altTagPrevious: string;
}

export interface Images {
  top: string;
  altTagBack: string;
  bottom: string;
  altTagFront: string;
}

export interface About {
  images: Images;
  title: string;
  subTitle: string;
  text: string;
}

export interface GalleryImage {
  altTag: string;
  path: string;
}

export interface GalleryData {
  title: string;
  subTitle: string;
  galleryImages: GalleryImage[];
}

export interface FooterIcon {
  id: number;
  icon: string;
  altTag: string;
}

export interface FooterData {
  title: string;
  footerIcons: FooterIcon[];
  logo: string;
  copyright: string;
}

export const defaultData = {
  cart: [],
  navigation: {
    logo: "",
    cartPath: "",
    altTagCart: "",
    count: "",
    dividerPath: "",
    altTagDivider: "",
  },
  menu: [],
  backButtonTitle: {
    title: "",
    buttonBackPath: "",
    buttonBackAltTag: "",
  },
  carousel: [],
  carouselButtons: {
    carouselButtonNext: "",
    altTagNext: "",
    carouselButtonPrevious: "",
    altTagPrevious: "",
  },
  about: {
    images: {
      top: "",
      altTagBack: "",
      bottom: "",
      altTagFront: "",
    },
    title: "",
    subTitle: "",
    text: "",
  },
  gallery: {
    title: "",
    subTitle: "",
    galleryImages: [],
  },
  footer: {
    title: "",
    footerIcons: [],
    logo: "",
    copyright: "",
  },
};

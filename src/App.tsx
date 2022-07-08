import Navigation from "./components/organisms/navigation/navigation";
import About from "./components/organisms/about/about";
import Gallery from "./components/organisms/gallery/gallery";
import Footer from "./components/organisms/footer/footer";
import { useEffect, useState } from "react";
import { defaultData } from "./data";

function App() {
  const getData = async () => {
    const requestURL =
      "https://raw.githubusercontent.com/Ne-anna/renome-typescript/about-implementation/src/db.json";
    const request = await fetch(requestURL);

    return request.json();
  };

  const [data, setData] = useState(defaultData);

  useEffect(() => {
    getData().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div>
      <header>
        <Navigation
          navigationData={{
            logo: data.navigation.logo,
            cartPath: data.navigation.cartPath,
            altTagCart: data.navigation.altTagCart,
            count: data.navigation.count,
            dividerPath: data.navigation.dividerPath,
            altTagDivider: data.navigation.altTagDivider,
          }}
          cartData={{
            cart: data.cart,
          }}
          menuData={{
            menu: data.menu,
          }}
          backButtonData={{
            buttonData: data.backButtonTitle,
          }}
        />
      </header>
      <main>
        <About
          title={data.about.title}
          subTitle={data.about.subTitle}
          text={data.about.text}
          top={data.about.images.top}
          altTagBack={data.about.images.altTagBack}
          bottom={data.about.images.bottom}
          altTagFront={data.about.images.altTagBack}
        />

        <Gallery
          title={data.gallery.title}
          subTitle={data.gallery.subTitle}
          galleryImages={data.gallery.galleryImages}
        />
      </main>
      <footer>
        <Footer
          title={data.footer.title}
          footerIcons={data.footer.footerIcons}
          logo={data.footer.logo}
          copyright={data.footer.copyright}
        />
      </footer>
    </div>
  );
}

export default App;

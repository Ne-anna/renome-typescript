import About from "./Components/Organisms/About/about";
import { useEffect, useState } from "react";
import { defaultData } from "./data";

function App() {
  const getData = async () => {
    const requestURL =
      "https://raw.githubusercontent.com/Ne-anna/renome-typescript/about-implementation/src/db.json";
    const request = await fetch(requestURL);

    return request.json();
  };

  const [data, setItems] = useState(defaultData);

  useEffect(() => {
    getData().then((response) => {
      setItems(response);
    });
  }, []);

  return (
    <div>
      <header></header>
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
      </main>
    </div>
  );
}

export default App;

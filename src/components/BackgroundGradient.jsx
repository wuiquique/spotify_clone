import { useEffect, useState } from "react";
import PlaylistItemRect from "./PlaylistItemRect.jsx";
import "./BackgroundGradient.css";
import BackArrowIcon from "../Icons/BackArrowIcon.jsx";
import NextArrowIcon from "../Icons/NextArrowIcon.jsx";
import NavButtons from "./NavButtons.jsx";

function BackgroundGradient({ data }) {
  const [color, setColor] = useState(data[0].mainColor);

  useEffect(() => {
    document.documentElement.style.setProperty("--background-color", color);
  }, [color]);

  return (
    <div className="background-gradient h-full relative">
      <div className="background-mimic h-full w-full absolute top-0 left-0"></div>
      <NavButtons />
      <div className="w-full flex justify-center flex-wrap gap-4 pt-10 pb-10">
        {data.slice(0, 8).map((e, i) => (
          <PlaylistItemRect
            key={i}
            data={e}
            setColor={setColor}
            baseColor={data[0].mainColor}
          />
        ))}
      </div>
    </div>
  );
}

export default BackgroundGradient;

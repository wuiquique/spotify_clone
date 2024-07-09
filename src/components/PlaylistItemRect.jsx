import { useEffect } from "react";
import PlayIcon from "../Icons/PlayIcon.jsx";

function PlaylistItemRect({ data, setColor, baseColor }) {
  let artistsFormat = "";
  if (data.type === "playlist" || data.type === "album") {
    const lf = new Intl.ListFormat("en");
    artistsFormat = lf.format(data.artists);
  }

  const handleEnter = () => {
    setColor(data.mainColor);
  }

  const handleLeave = () => {
    setColor(baseColor);
  }

  return (
    <div
      className="group flex relative overflow-hidden items-center gap-4 rounded-md bg-white bg-opacity-10 hover:bg-opacity-20 w-full sm:w-[48%] md:w-[48%] lg:w-[48%] xl:w-[23%]"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <a
        href={
          data.type === "playlist" || data.type === "liked"
            ? `/playlist/${data.id}`
            : data.type === "artist"
            ? `/artist/${data.id}`
            : data.type === "album"
            ? `/album/${data.id}`
            : data.type === "folder"
            ? `/folder/${data.id}`
            : "/"
        }
        className="flex items-center gap-4 w-full"
      >
        <picture className="w-16 h-16">
          {data.type === "playlist" ||
          data.type === "album" ||
          data.type === "liked" ? (
            <img
              src={data.cover}
              alt={`Cover of ${data.title} by ${artistsFormat}`}
              className="object-cover w-full h-full"
            />
          ) : data.type === "artist" ? (
            <img
              src={data.img}
              alt={`Image of ${data.name}`}
              className="object-cover w-full h-full"
            />
          ) : null}
        </picture>
        <div className="flex items-center flex-1">
          <h3 className="text-white">
            {data.type === "playlist" ||
            data.type === "album" ||
            data.type === "liked"
              ? data.title
              : data.type === "artist" || data.type === "folder"
              ? data.name
              : null}
          </h3>
        </div>
      </a>
      <div className="aspect-square h-full flex justify-center items-center bg-transparent">
        <button className="aspect-square h-3/4 bg-spotify-green rounded-full flex justify-center items-center shadow-md shadow-colorbg-card opacity-0 group-hover:opacity-100 hover:h-[78%]">
          <div className="aspect-square h-2/5">
            <PlayIcon />
          </div>
        </button>
      </div>
    </div>
  );
}

export default PlaylistItemRect;

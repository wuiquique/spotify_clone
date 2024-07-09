import BackArrowIcon from "../Icons/BackArrowIcon.jsx";
import NextArrowIcon from "../Icons/NextArrowIcon.jsx";

function NavButtons() {
  return (
    <div className="px-10 pt-4 flex relative">
      <div className="flex flex-1">
        <button
          className="bg-colorbg-card bg-opacity-80 aspect-square w-[32px] rounded-full flex justify-center items-center"
          onClick={() => history.go(-1)}
        >
          <div className="aspect-square h-[50%] fill-color-basic-text">
            <BackArrowIcon />
          </div>
        </button>
        &nbsp;&nbsp;
        <button
          className="bg-colorbg-card bg-opacity-80 aspect-square w-[32px] rounded-full flex justify-center items-center"
          onClick={() => history.go(1)}
        >
          <div className="aspect-square h-[50%] fill-color-basic-text">
            <NextArrowIcon />
          </div>
        </button>
      </div>
      <div className="flex">
        
      </div>
    </div>
  );
}

export default NavButtons;

import BackArrowIcon from "../Icons/BackArrowIcon.jsx";
import NewsIcon from "../Icons/NewsIcon.jsx";
import NextArrowIcon from "../Icons/NextArrowIcon.jsx";

function NavButtons() {
  return (
    <div className="px-10 h-14 flex relative">
      <div className="flex items-center flex-1">
        <button
          className="bg-colorbg-card bg-opacity-80 aspect-square w-[32px] rounded-full flex justify-center items-center"
          onClick={() => history.go(-1)}
        >
          <div className="aspect-square h-[16px] fill-color-basic-text">
            <BackArrowIcon />
          </div>
        </button>
        &nbsp;&nbsp;
        <button
          className="bg-colorbg-card bg-opacity-80 aspect-square w-[32px] rounded-full flex justify-center items-center"
          onClick={() => history.go(1)}
        >
          <div className="aspect-square h-[16px] fill-color-basic-text">
            <NextArrowIcon />
          </div>
        </button>
      </div>
      <div className="flex items-center justify-center py-4">
        <button className="group bg-colorbg-card bg-opacity-80 aspect-square w-[32px] rounded-full flex justify-center items-center hover:w-[34px]">
          <div className="aspect-square h-[16px] fill-color-basic-text group-hover:fill-white group-hover:h-[17px]">
            <NewsIcon />
          </div>
        </button>
        &nbsp;&nbsp;
        <button className="bg-colorbg-card bg-opacity-80 aspect-square w-[32px] rounded-full flex justify-center items-center hover:w-[34px]">
            <img className="rounded-full h-[26px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92T_gtiiVXrGZSItnKRAHiCB7WwQYTPPVqA&usqp=CAU" alt="profile pic" />
        </button>
      </div>
    </div>
  );
}

export default NavButtons;

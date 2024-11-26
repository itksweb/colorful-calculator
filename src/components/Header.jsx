import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../store/calcSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.calc.theme);

  let switchPosition; // position of the switch button in the theme switcher

  useEffect(() => {
    switch (theme) {
      case "1":
        switchPosition = "justify-start";
        break;
      case "2":
        switchPosition = "justify-center";
        break;
      case "3":
        switchPosition = "justify-end";
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <header className="flex justify-between items-center px-1 py-3 w-[345px] ">
      <h1 className=" text-3xl font-bold ">calc</h1>
      <div className=" flex items-baseline justify-end gap-3 py-3 text-xs  ">
        <p className="">THEME</p>
        <div className="theme-switch flex items-center flex-col ">
          <div className="switch-numbers grid grid-cols-3 p-1 ">
            <span className="w-[14px] text-center">1</span>
            <span className="w-[14px] text-center">2</span>
            <span className="w-[14px] text-center">3</span>
          </div>
          <div
            className={`theme-switcher w-[50px] h-[14px] border-none bg-inputs-display-bg rounded-[10px] flex items-center justify-center cursor-pointer`}
            onClick={() => dispatch(switchTheme())}
          >
            <span className="theme-switcher-inner border-none rounded-full size-3 bg-primary-color "></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

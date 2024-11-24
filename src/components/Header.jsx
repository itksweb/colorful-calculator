import { useDispatch } from "react-redux";
import { switchTheme } from "../store/calcSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="">
      <h1>calc</h1>
      <div className="header-right">
        <p>THEME</p>
        <div className="theme-switch">
          <span className="switch-numbers">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </span>
          <div
            className="theme-switcher"
            onClick={() => dispatch(switchTheme())}
          >
            <span className="theme-switcher-inner"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

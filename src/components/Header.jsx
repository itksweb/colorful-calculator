import { useSelector, useDispatch } from "react-redux";
import { calcActions } from "../store/calcSlice";

const header = () => {
  //const theme = useSelector((state) => state.calc.theme);
  const dispatch = useDispatch();

  const switchTheme = () => {
    dispatch(calcActions.switchTheme());
  };

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
          <div className="theme-switcher" onClick={switchTheme}>
            <span className="theme-switcher-inner"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;

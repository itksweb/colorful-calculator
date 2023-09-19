import { useSelector, useDispatch } from "react-redux";
import { calcActions } from "../store/calcSlice";
import btnValues from "./btnValues";

const CalcBtns = () => {
  const dispatch = useDispatch();

  const uDisplay = (val) => {
    dispatch(calcActions.setDisplay(val.target.value));
  };
  const rDisplay = () => {
    dispatch(calcActions.resetDisplay());
  };
  const dDisplay = () => {
    dispatch(calcActions.deleteDisplay());
  };
  const handleDot = (val) => {
    dispatch(calcActions.manageDot(val.target.value));
  };
  const solve = () => {
    dispatch(calcActions.solveIt());
  };

  let buttons = btnValues.map((item) => {
    let myClass = item === "del" || item === "reset" ? "colvar" : undefined;
    let myFunction = () => {};
    if (item === "del") {
      myFunction = dDisplay;
    } else if (item === "reset") {
      myFunction = rDisplay;
    } else if (item === "=") {
      myFunction = solve;
    } else if (item === ".") {
      myFunction = handleDot;
    } else {
      myFunction = uDisplay;
    }
    return (
      <input
        type="button"
        value={item}
        key={item}
        className={myClass}
        onClick={myFunction}
        id={item === "=" ? "equal" : item}
      />
    );
  });

  return <div className="buttons">{buttons}</div>;
};

export default CalcBtns;

import { useDispatch } from "react-redux";
import {
  setDisplay,
  resetDisplay,
  deleteDisplay,
  manageDot,
  solveIt,
} from "../store/calcSlice";
import { btnValues } from "./utils";

const CalcBtns = () => {
  const dispatch = useDispatch();

  let buttons = btnValues.map((item) => {
    let myClass = "";
    let myFunction = () => {};
    switch (item) {
      case "del":
        myClass = "colvar";
        myFunction = () => dispatch(deleteDisplay());
        break;
      case "reset":
        myClass = "colvar";
        myFunction = () => dispatch(resetDisplay());
        break;
      case "=":
        myFunction = () => dispatch(solveIt());
        break;
      case ".":
        myClass = "colvar";
        myFunction = (val) => dispatch(manageDot(val.target.value));
        break;
      default:
        myFunction = (val) => dispatch(setDisplay(val.target.value));
        break;
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

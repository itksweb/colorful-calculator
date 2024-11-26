import { useDispatch } from "react-redux";
import {
  setDisplay,
  resetDisplay,
  deleteDisplay,
  manageDot,
  solveIt,
} from "../store/calcSlice";

const btnValues = [
  "7",
  "8",
  "9",
  "del",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "*",
  "reset",
  "=",
];

const CalcBtns = () => {
  const dispatch = useDispatch();

  let buttons = btnValues.map((item) => {
    let myClass = "bg-input-btn-bg text-input-btn-text shadow-input-shadow ";
    let myFunction = () => {};
    switch (item) {
      case "del":
        myFunction = () => dispatch(deleteDisplay());
        break;
      case "reset":
        myClass =
          "col-span-2 shadow-reset-shadow text-reset-btn-text bg-reset-btn-bg ";
        myFunction = () => dispatch(resetDisplay());
        break;
      case "=":
        myClass =
          "col-span-2 shadow-equal-shadow text-equal-btn-text bg-equal-btn-bg ";
        myFunction = () => dispatch(solveIt());
        break;
      case ".":
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
        className={`${myClass} font-bold text-[32px] h-[50px] border-none rounded-[10px] `}
        onClick={myFunction}
        id={item === "=" ? "equal" : item}
      />
    );
  });

  return (
    <div className="buttons p-5 bg-inputs-display-bg rounded-[10px] border-none grid grid-cols-4 gap-5 ">
      {buttons}
    </div>
  );
};

export default CalcBtns;

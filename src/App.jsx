import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import { setDisplay,resetDisplay,  deleteDisplay, manageDot, solveIt } from "./store/calcSlice";
import CalcBtn from "./components/CalcBtn";

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


function App() {
  const {theme, display} = useSelector((state) => state.calc);
  const dispatch = useDispatch();
  const btnFunction = (val, item) => {
    switch (item) {
      case "del":
        dispatch(deleteDisplay());
        break;
      case "reset":
        dispatch(resetDisplay());
        break;
      case "=":
        dispatch(solveIt());
        break;
      case ".":
        dispatch(manageDot(val.target.value));
        break;
      default:
        dispatch(setDisplay(val.target.value));
        break;
    }
  };

  return (
    <div
      className="wrapper flex flex-col items-center justify-center gap-3 bg-bg-color text-text-color h-screen w-full "
      data-theme={theme}
    >
      <Header />
      <main className="grid w-[345px] gap-4 ">
        <div id="display" className=" flex justify-end p-5 min-h-20 items-center border-none rounded-xl text-3xl text-text-color font-bold bg-inputs-display-bg">
          {display}
        </div>
        <div id="buttons" className="p-5 bg-inputs-display-bg rounded-[10px] border-none grid grid-cols-4 gap-5 ">
          {btnValues.map((item) => <CalcBtn item={item} key={item} btnFunction={btnFunction} />)}
        </div>
      </main>
      
    </div>
  );
}

export default App;

import { useSelector } from "react-redux";
import CalcBtns from "./CalcBtns";

const Main = () => {
  const { display } = useSelector((state) => state.calc);
  return (
    <main className="grid w-[345px] gap-4 ">
      <div className=" flex justify-end p-5 min-h-20 items-center border-none rounded-xl text-3xl text-text-color font-bold bg-inputs-display-bg">
        {display}
      </div>
      <CalcBtns />
    </main>
  );
};

export default Main;

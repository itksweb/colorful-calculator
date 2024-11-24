import { useSelector } from "react-redux";
import CalcBtns from "./CalcBtns";

const Main = () => {
  const { display } = useSelector((state) => state.calc);
  return (
    <main>
      <div className="display">{display}</div>
      <CalcBtns />
    </main>
  );
};

export default Main;

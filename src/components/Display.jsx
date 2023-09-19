import { useSelector } from "react-redux";

const Display = () => {
  const display = useSelector((state) => state.calc.display);
  return (
    <div className="display" value={display}>
      {display}
    </div>
  );
};

export default Display;

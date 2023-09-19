import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import Main from "./components/Main";

function App() {
  const theme = useSelector((state) => state.calc.theme);
  return (
    <div className="wrapper" data-theme={theme}>
      <span>
        <Header />
        <Main />
      </span>
    </div>
  );
}

export default App;

import Header from "./components/Header";
import { useSelector } from "react-redux";
import Main from "./components/Main";

function App() {
  const theme = useSelector((state) => state.calc.theme);
  return (
    <div
      className="wrapper flex flex-col items-center justify-center gap-3 bg-bg-color text-text-color h-screen w-full "
      data-theme={theme}
    >
      <Header />
      <Main />
    </div>
  );
}

export default App;

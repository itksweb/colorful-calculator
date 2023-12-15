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

const Header = ({ setTheme }) => {
  const switchTheme = () => {
    setTheme();
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

const Display = ({ display }) => {
  return (
    <div className="display" value={display}>
      {display}
    </div>
  );
};

const CalcBtns = ({
  setDisplay,
  deleteDisplay,
  resetDisplay,
  manageDot,
  solveIt,
}) => {
  const uDisplay = (val) => {
    setDisplay(val.target.value);
  };
  const rDisplay = () => {
    resetDisplay();
  };
  const dDisplay = () => {
    deleteDisplay();
  };
  const handleDot = (val) => {
    manageDot(val.target.value);
  };
  const solve = () => {
    solveIt();
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

const Main = () => {
  const [display, setDisplay] = React.useState("0");

  const updateDisplay = (val) => {
    let beforeOp = /^(0\.|[1-9][0-9]*\.?)(\d*)\.?(\d*)/g;
    let afterOp = /([\+\-\*\/])(0\.|[1-9][0-9]*\.?)?(\d*)(?:\.?(\d*))$/g;
    let op = /[\-\+\*\/]+([\+\*\/])/;
    if (display === "0") {
      setDisplay(val);
    } else {
      setDisplay((prev) => prev + val);
    }
    if (beforeOp.test(display)) {
      setDisplay((prev) => prev.replace(beforeOp, "$1$2$3"));
    }
    if (afterOp.test(display)) {
      setDisplay((prev) => prev.replace(afterOp, "$1$2$3$4"));
    }
    if (op.test(display)) {
      setDisplay((prev) => prev.replace(op, "$1"));
    }
  };
  const resetDisplay = () => {
    setDisplay("0");
  };
  const deleteDisplay = () => {
    if (display.length > 1) {
      setDisplay((prev) => prev.replace(/.$/, ""));
    } else if (display.length === 1) {
      setDisplay("0");
    }
  };
  const solveIt = () => {
    setDisplay((prev) => eval(prev));
  };
  const manageDot = (val) => {
    if (display === "0") {
      setDisplay("0");
    } else if (display[display.length - 1] === ".") {
      return;
    } else {
      setDisplay((prev) => prev + val);
    }
  };

  return (
    <main>
      <Display display={display} />
      <CalcBtns
        setDisplay={updateDisplay}
        resetDisplay={resetDisplay}
        deleteDisplay={deleteDisplay}
        solveIt={solveIt}
        manageDot={manageDot}
      />
    </main>
  );
};

function App() {
  const [theme, setTheme] = React.useState(1);
  const switchTheme = () => {
    if (theme === 1 || theme === 2) {
      setTheme((prev) => prev + 1);
    } else if (theme >= 3) {
      setTheme(1);
    }
  };
  return (
    <div className="wrapper" data-theme={theme}>
      <span>
        <Header setTheme={switchTheme} />
        <Main />
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

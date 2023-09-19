import { createSlice } from "@reduxjs/toolkit";

const calcSlice = createSlice({
  name: "calc",
  initialState: {
    theme: 1,
    display: "0",
  },
  reducers: {
    switchTheme(state) {
      if (state.theme < 3 && state.theme >= 1) {
        state.theme += 1;
      } else {
        state.theme += 1;
      }
    },
    setDisplay(state, action) {
      let beforeOp = /^(0\.|[1-9][0-9]*\.?)(\d*)\.?(\d*)/g;
      let afterOp = /([\+\-\*\/])(0\.|[1-9][0-9]*\.?)?(\d*)(?:\.?(\d*))$/g;
      let op = /[\-\+\*\/]+([\+\*\/])/;
      if (state.display === "0") {
        state.display = action.payload;
      } else {
        state.display += action.payload;
      }
      if (beforeOp.test(state.display)) {
        state.display = state.display.replace(beforeOp, "$1$2$3");
      }
      if (afterOp.test(state.display)) {
        state.display = state.display.replace(afterOp, "$1$2$3$4");
      }
      if (op.test(state.display)) {
        state.display = state.display.replace(op, "$1");
      }
    },
    resetDisplay(state) {
      state.display = "0";
    },
    deleteDisplay(state) {
      if (state.display.length > 1) {
        state.display = state.display.replace(/.$/, "");
      } else if (state.display.length === 1) {
        state.display = "0";
      }
    },
    solveIt(state) {
      state.display = eval(state.display);
    },
    manageDot(state, action) {
      if (state.display === "0") {
        state.display = "0.";
      } else if (state.display[state.display.length - 1] === ".") {
        return;
      } else {
        state.display += action.payload;
      }
    },
  },
});

export const calcActions = calcSlice.actions;
export default calcSlice.reducer;

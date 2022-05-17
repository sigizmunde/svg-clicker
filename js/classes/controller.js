import { History } from "./history.js";

export class Controller {
  static MODES = ["single", "group", "hover"];
  #mode;
  histLimit = 50;

  constructor(
    groupBtn = null,
    hoverBtn = null,
    undoBtn = null,
    revertBtn = null
  ) {
    if (Controller._instance) {
      console.log("This singleton has an instance", Controller._instance);
      return Controller._instance;
    }

    Controller._instance = this;

    this.#mode = "single"; //Controller.MODES[0];
    this.currentColor = "#ffffff";
    this.buttons = { groupBtn, hoverBtn, undoBtn, revertBtn };

    this.backHistory = new History(this.histLimit);
    this.forwardHistory = new History(this.histLimit);

    if (this.buttons.groupBtn)
      this.buttons.groupBtn.addEventListener("click", () => this.gBtnClick());
    if (this.buttons.hoverBtn)
      this.buttons.hoverBtn.addEventListener("click", () => this.hBtnClick());
    if (this.buttons.undoBtn)
      this.buttons.undoBtn.addEventListener("click", () => this.undoChange());
    if (this.buttons.revertBtn)
      this.buttons.revertBtn.addEventListener("click", () =>
        this.revertChange()
      );

    // window.addEventListener("keydown", (e) => console.log(e.code));
  }

  get mode() {
    return this.#mode;
  }

  set mode(newMode) {
    if (
      typeof newMode === Number &&
      newMode >= 0 &&
      newMode < Controller.MODES.length
    ) {
      this.#mode = Controller.MODES[newMode];
      return this.#mode;
    }
    // if (typeof newMode === String && Controller.MODES.includes(newMode))
    else {
      this.#mode = newMode;
      return this.#mode;
    }
  }

  leftClick(event) {
    if (
      this.mode === Controller.MODES[0] ||
      this.mode === Controller.MODES[2]
    ) {
      // console.log(`target ${event.target.style}`);
      if (event.target.style.fill === this.currentColor) return 0;
      this.backHistory.pushStack([
        {
          element: event.target,
          fill: event.target.style.fill,
        },
      ]);
      event.target.style.fill = this.currentColor;
      return 1;
    } else if (this.mode === Controller.MODES[1]) {
      // console.log(`currentTarget ${event.currentTarget.style}`);
      const newHistoryState = [];
      event.currentTarget.childNodes.forEach((node) => {
        if (node.style.fill === this.currentColor) return;
        newHistoryState.push({
          element: node,
          fill: node.style.fill,
        });
        node.style.fill = this.currentColor;
      });
      if (newHistoryState.length) {
        this.backHistory.pushStack(newHistoryState);
      }
    }
    this.returnFocus();
  }

  mouseOver(event) {
    if (this.mode === Controller.MODES[0]) {
      event.target.style.stroke = "#ffffff";
    }
    if (this.mode === Controller.MODES[1]) {
      event.currentTarget.childNodes.forEach((node) => {
        node.style.stroke = "#ffffff";
      });
    }
    if (this.mode === Controller.MODES[2]) {
      event.target.style.stroke = "#ffffff";
      if (event.buttons === 1 || event.buttons === 3) {
        if (event.target.style.fill === this.currentColor) return 0;
        this.backHistory.pushStack([
          {
            element: event.target,
            fill: event.target.style.fill,
          },
        ]);
        event.target.style.fill = this.currentColor;
      }
    }
  }

  mouseLeave(event) {
    event.currentTarget.childNodes.forEach((node) => {
      node.style.stroke = "none";
    });
    this.returnFocus();
  }

  gBtnClick() {
    this.buttons.groupBtn.classList.toggle("is-active");
    if (this.buttons.groupBtn.classList.contains("is-active")) {
      // console.log("group on");
      this.buttons.hoverBtn.classList.remove("is-active");
      this.mode = Controller.MODES[1];
    } else {
      // console.log("single");
      this.mode = Controller.MODES[0];
    }
  }

  hBtnClick() {
    this.buttons.hoverBtn.classList.toggle("is-active");
    if (this.buttons.hoverBtn.classList.contains("is-active")) {
      console.log("hover on");
      this.buttons.groupBtn.classList.remove("is-active");
      this.mode = Controller.MODES[2];
    } else {
      console.log("single");
      this.mode = Controller.MODES[0];
    }
  }

  undoChange() {
    console.log("undo");
    const state = this.backHistory.popStack();
    const tempState = this.exchangeStates(state);

    if (tempState) this.forwardHistory.pushStack(tempState);
  }

  revertChange() {
    console.log("revert");
    const state = this.forwardHistory.popStack();
    const tempState = this.exchangeStates(state);

    if (tempState) this.backHistory.pushStack(tempState);
  }

  exchangeStates(state) {
    if (!state) return 0;
    try {
      const newState = state.map((el) => {
        return { element: el.element, fill: el.element.style.fill };
      });
      state.forEach((el) => {
        // console.log(el.element.style.fill, el.fill);
        el.element.style["fill"] = el.fill;
        // console.log("changed to ", el.element.style.fill);
      });
      return newState;
    } catch (err) {
      console.error(err);
      return 0;
    }
  }

  clearHistory() {
    this.forwardHistory.clearStack();
    this.backHistory.clearStack();
  }

  keyboardCommands(event) {
    // console.log("key pressed ", event.code);

    if (event.ctrlKey && event.code === "KeyZ" && !event.shiftKey) {
      this.undoChange();
    }
    if (event.ctrlKey && event.shiftKey && event.code === "KeyZ") {
      this.revertChange();
    }
  }

  returnFocus() {
    window.focus(); //this lets window listen to keyboard events
    //this is not needed any more since keyboard listeners added to object.contentDocument
  }
}

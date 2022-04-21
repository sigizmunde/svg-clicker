export class MouseTool {
  static MODES = ["single", "group", "hover"];
  #mode;

  constructor(groupBtn = null, hoverBtn = null) {
    if (MouseTool._instance) {
      console.log("This singleton has an instance");
      return MouseTool._instance;
    }

    MouseTool._instance = this;

    this.#mode = "single"; //MouseTool.MODES[0];
    this.currentColor = "#ffffff";
    this.buttons = { groupBtn, hoverBtn };

    if (this.buttons.groupBtn)
      this.buttons.groupBtn.addEventListener("click", () => this.gBtnClick());
    if (this.buttons.hoverBtn)
      this.buttons.hoverBtn.addEventListener("click", () => this.hBtnClick());
  }

  get mode() {
    return this.#mode;
  }

  set mode(newMode) {
    if (
      typeof newMode === Number &&
      newMode >= 0 &&
      newMode < MouseTool.MODES.length
    ) {
      this.#mode = MouseTool.MODES[newMode];
      return this.#mode;
    }
    // if (typeof newMode === String && MouseTool.MODES.includes(newMode))
    else {
      this.#mode = newMode;
      return this.#mode;
    }
  }

  leftClick(event) {
    if (this.mode === MouseTool.MODES[0] || this.mode === MouseTool.MODES[2]) {
      console.log(`target ${event.target.style}`);
      event.target.style.fill = this.currentColor;
    } else if (this.mode === MouseTool.MODES[1]) {
      console.log(`currentTarget ${event.currentTarget.style}`);
      event.currentTarget.childNodes.forEach((node) => {
        node.style.fill = this.currentColor;
      });
    }
  }

  mouseOver(event) {
    if (this.mode === MouseTool.MODES[1]) {
      event.currentTarget.childNodes.forEach((node) => {
        node.style.stroke = "#ffffff";
      });
    }
    if (
      this.mode === MouseTool.MODES[2] &&
      (event.buttons === 1 || event.buttons === 3)
    ) {
      event.target.style.fill = this.currentColor;
    }
  }

  mouseLeave(event) {
    if (this.mode === MouseTool.MODES[1]) {
      event.currentTarget.childNodes.forEach((node) => {
        node.style.stroke = "none";
      });
    }
  }

  gBtnClick() {
    this.buttons.groupBtn.classList.toggle("is-active");
    if (this.buttons.groupBtn.classList.contains("is-active")) {
      console.log("group on");
      this.buttons.hoverBtn.classList.remove("is-active");
      this.mode = MouseTool.MODES[1];
    } else {
      console.log("single");
      this.mode = MouseTool.MODES[0];
    }
  }

  hBtnClick() {
    this.buttons.hoverBtn.classList.toggle("is-active");
    if (this.buttons.hoverBtn.classList.contains("is-active")) {
      console.log("hover on");
      this.buttons.groupBtn.classList.remove("is-active");
      this.mode = MouseTool.MODES[2];
    } else {
      console.log("single");
      this.mode = MouseTool.MODES[0];
    }
  }
}

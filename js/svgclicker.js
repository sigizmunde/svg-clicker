// ========================= pallette class start ====================
class PalletteArchive {
  constructor() {
    this.palletteArr = [];
  }

  addPallettes(colorPalArr) {
    //requires array of objects {palletteName, colorNumArr}
    for (const pallette of colorPalArr) {
      this.addOnePallette(pallette);
    }
  }

  addOnePallette({ palletteName, colorNumArr }) {
    if (!this.palletteArr.find((a) => a.palletteName === palletteName)) {
      this.palletteArr.push({ palletteName, colorNumArr });
      return 1;
    } else return null;
  }

  removePallette(palletteName) {
    if (this.palletteArr.find((a) => (a.palletteName = palletteName))) {
      this.palletteArr.splice(
        this.palletteArr.findIndex((a) => (a.palletteName = palletteName)),
        1
      );
      return 1;
    } else return null;
  }

  generateNewPallette() {
    //generates new pallette from library colors
  }

  generatePalletteMarkup(palletteRef) {
    let currentPallette = null;

    if (typeof palletteRef === "string") {
      currentPallette = this.palletteArr.find(
        (a) => (a.palletteName = palletteName)
      );
    } else if (typeof palletteRef === "number" && palletteRef > -1) {
      currentPallette = this.palletteArr[palletteRef];
    }

    if (currentPallette) {
      const colorUl = document.createElement("ul");
      colorUl.classList.add("js-color-pallette");
      colorUl.style =
        "display: flex; margin-left: -12px; background-color: white; padding: 0; list-style: none;";
      for (const colorNum of currentPallette.colorNumArr) {
        const colorLi = document.createElement("li");
        colorLi.classList.add("js-color-box");
        colorLi.style = `display: block; margin-left: 12px; background-color: #${colorNum
          .toString(16)
          .padStart(6, "0")}; padding: 0; width: calc((100% / ${
          currentPallette.colorNumArr.length
        }) - 12px); height: 24px; border-radius: 4px;`;
        colorUl.append(colorLi);
      }
      const nameP = document.createElement("p");
      nameP.classList.add("pallette-name");
      nameP.innerText = currentPallette.palletteName;
      return [colorUl, nameP];
    } else {
      const errorStatement = document.createElement("p");
      errorStatement.innerText = "No pallette found.";
      return [errorStatement];
    }
  }

  generateListMarkup() {
    const listUl = document.createElement("ul");
    listUl.classList.add("js-pallette-list");
    listUl.style =
      "display: block; margin: 0; background-color: white; color: black; padding: 0; list-style: none;";
    for (const pallette of this.palletteArr) {
      const listItem = documant.createElement("li");
      listItem.classList.add("js-pallette-name");
      listItem.dataset["pallette-name"] = pallette.palletteName;
      listItem.innerText = pallette.palletteName;
      listUl.append(listItem);
    }
    return listUl;
  }
}
// ========================= pallette class end ======================

// ========================= loader class start ======================
class SimpleLoader {
  static LOADERCLASS = "js-loader-indicator";

  constructor(loaderContainer) {
    this.loaderContainer = loaderContainer;
    this.loaderEl = null;
    this.loaderStripe = null;
  }

  initLoader() {
    console.log("initLoader", this);
    if (this.loaderContainer) {
      this.loaderEl = this.loaderContainer.querySelector(
        `.${SimpleLoader.LOADERCLASS}`
      );
      if (!this.loaderEl) {
        this.loaderEl = document.createElement("div");
        this.loaderEl.classList.add(SimpleLoader.LOADERCLASS);
        this.loaderEl.style.display = "flex";
        this.loaderEl.style.width = "100%";
        this.loaderEl.style.height = "50px";
        this.loaderEl.style.padding = "0";
        this.loaderEl.style.backgroundColor = "#ffffff";
        this.loaderContainer.prepend(this.loaderEl);
        return "first_init";
      } else return "previous_init";
    } else console.log("no container", this.loaderContainer);
  }

  showLoader(current, overall) {
    console.log("showLoader", this);
    let elString = "";
    this.loaderStripe = document.createElement("div");
    this.loaderStripe.classList.add("js-loader-stripe");
    this.loaderStripe.style.backgroundColor = "#2233ff";
    this.loaderStripe.style.transition = "width 2s";
    this.loaderStripe.style.width = `${Math.round((current / overall) * 100)}%`;
    this.loaderStripe.style.height = "50px";
    this.loaderEl.append(this.loaderStripe);
  }

  updateLoader(current, overall) {
    console.log("updateLoader", current, overall);
    if (this.loaderEl) {
      if (this.loaderStripe) {
        this.loaderStripe.style.width = `${Math.round(
          (current / overall) * 100
        )}%`;
      } else this.showLoader(current, overall);
    } else return "no_loader_initialized";
  }

  removeLoader() {
    console.log("removeLoader");
    if (this.loaderEl) {
      this.loaderContainer.remove();
    }
  }
}
// ========================= loader class end ========================

const colorSchemesArr = [
  {
    palletteName: "cold violet",
    colorNumArr: [0x56b6c4, 0x9567e0, 0x6f3096, 0x06114f, 0xf7a579],
  },
  {
    palletteName: "purple sunrise",
    colorNumArr: [0xf89f5b, 0xe53f71, 0x9c3587, 0x653780, 0x3f1651],
  },
  {
    palletteName: "vivid and bright",
    colorNumArr: [
      0x017aff, 0xf96300, 0xf5c900, 0x6c47ff, 0xf34971, 0xcdad7a, 0x39c0c8,
      0xff9382, 0xaabb5d,
    ],
  },
  {
    palletteName: "colors of 1980s",
    colorNumArr: [0xfe68a8, 0x3869c8, 0x4fdddf, 0xffda58, 0xcf95fb],
  },
  {
    palletteName: "perfect storm",
    colorNumArr: [0xb8d8d8, 0x7a9e9f, 0x4f6367, 0xeef5db, 0xfe5f55],
  },
];

const refs = {
  body: document.querySelector("body"),
  svgimage: document.getElementById("patternsvg"),
  loaderContainer: document.querySelector(".loader-container"),

  colorPanel: document.querySelector(".color-menu"),
  minimizeBtn: document.querySelector(".js-minimize-btn"),
  colorListBtn: document.querySelector(".js-color-list-btn"),
  currentColor: document.querySelector(".js-current-color"),
  colorMenu: null,
};

const val = {
  curColor: "#ffffff",
};

refs.svgimage.addEventListener("load", function () {
  addSvgListeners(refs.svgimage);
});

// refs.body.addEventListener("click", addSvgListeners);

const myColors = new PalletteArchive();
myColors.addPallettes(colorSchemesArr);

refs.colorMenu = myColors.generatePalletteMarkup(0);
refs.colorPanel.append(...refs.colorMenu);
for (const colorBox of refs.colorMenu[0].children) {
  colorBox.addEventListener("click", onColorClick);
}
setCurrentColor(refs.colorMenu[0].children[0].style.backgroundColor);

function setCurrentColor(colorString) {
  val.curColor = colorString;
  refs.currentColor.style.backgroundColor = colorString;
}

function addSvgListeners(objectEl) {
  console.log("addSvgListeners");

  let svgDoc = objectEl.contentDocument;
  let els = svgDoc.querySelectorAll("path");
  for (const el of els) {
    el.addEventListener("click", onPatternClick);
  }
}

function onPatternClick(event) {
  console.log("onPatternClick", `target ${event.target}`);
  event.target.style.fill = val.curColor;
}

function onColorClick(event) {
  setCurrentColor(event.target.style.backgroundColor);
}

function onClick(event) {
  console.log(event.target, event.currentTarget);
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

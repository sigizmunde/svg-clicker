import { PalletteArchive } from "./classes/pallette.js";
import { Controller } from "./classes/controller.js";

const pictureGallery = [
  { name: "Палай!", link: "./images/ub11.svg" },
  { name: "Палай! — pattern", link: "./images/ub5.svg" },
  { name: "Kyiv Santa", link: "./images/ub15.svg" },
  { name: "russian ship", link: "./images/ub7.svg" },
  { name: "Святокиця", link: "./images/ub12.svg" },
  { name: "Кохайтеся", link: "./images/ub10.svg" },
];

const colorSchemesArr = [
  {
    palletteName: "basic pallette",
    colorNumArr: [0x3498db, 0xf1c40f, 0xe74c3c, 0x2ecc71, 0xecf0f1, 0x2c3e50],
  },
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
  {
    palletteName: "shades of Ukraine",
    colorNumArr: [0xfff04b, 0xffd234, 0xffae01, 0x006ad7, 0x218fff],
  },
];

const refs = {
  body: document.querySelector("body"),
  svgimage: document.getElementById("patternsvg"),
  imageContainer: document.querySelector(".image-container"),
  openMainMenuBtn: document.querySelector("#menu-open"),
  mainMenu: document.querySelector(".main-menu"),
  changePicBtn: document.querySelector("#change-pic-btn"),
  savePicBtn: document.querySelector("#save-pic-btn"),
  menuContainer: document.querySelector(".menu-container"),
  backdrop: document.querySelector(".backdrop"),

  groupBtn: document.querySelector(".js-group-tool-btn"),
  hoverBtn: document.querySelector(".js-hover-tool-btn"),
  undoBtn: document.querySelector(".js-undo-tool-btn"),
  revertBtn: document.querySelector(".js-revert-tool-btn"),

  colorPanel: document.querySelector(".color-menu"),
  minimizeBtn: document.querySelector(".js-minimize-btn"),
  colorListBtn: document.querySelector(".js-color-list-btn"),
  currentColor: document.querySelector(".js-current-color"),
  colorMenu: null,
};

const controller = new Controller(
  refs.groupBtn,
  refs.hoverBtn,
  refs.undoBtn,
  refs.revertBtn
);

window.addEventListener("keydown", (e) => controller.keyboardCommands(e));

// ========= mobile menu ==================================
refs.openMainMenuBtn.addEventListener("click", () =>
  refs.mainMenu.classList.toggle("is-open")
);

refs.mainMenu.addEventListener("click", () =>
  refs.mainMenu.classList.toggle("is-open")
);
// ========================================================

addSvgListeners(refs.svgimage);

refs.svgimage.addEventListener("load", function () {
  addSvgListeners(refs.svgimage);
  controller.clearHistory();
});

refs.svgimage.setAttribute("data", "./images/ub11.svg");

// refs.body.addEventListener("click", addSvgListeners);

const myColors = new PalletteArchive();
myColors.addPallettes(colorSchemesArr);

updateColorPanel(0);

refs.changePicBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showPictureList(pictureGallery);
});

refs.savePicBtn.addEventListener("click", (e) => {
  e.preventDefault();
  makeFile("kolyornytsia.svg");
});

refs.minimizeBtn.addEventListener("click", onMinimizeBtnClick);
refs.colorListBtn.addEventListener("click", onColorListBtnClick);

refs.backdrop.addEventListener("click", hideModal);

// =========== functions ============

function setCurrentColor(colorString) {
  controller.currentColor = colorString;
  refs.currentColor.style.backgroundColor = colorString;
}

function addSvgListeners(objectEl) {
  console.log("adding SVG listeners...");

  let svgDoc = objectEl.contentDocument;
  svgDoc.addEventListener("keydown", (event) =>
    controller.keyboardCommands(event)
  );
  let els = svgDoc.querySelectorAll("g:not(#svg-back)");
  for (const el of els) {
    el.addEventListener("click", (event) => controller.leftClick(event));
    el.addEventListener("mouseover", (event) => controller.mouseOver(event));
    el.addEventListener("mouseleave", (event) => controller.mouseLeave(event));

    console.log("found <g> element");
  }
  console.log("...done");
}

// function onPatternClick(event) {
//   console.log("onPatternClick", `target ${event.target}`);
//   event.target.style.fill = val.curColor;
// }

function onColorClick(event) {
  setCurrentColor(event.target.style.backgroundColor);
}

function onClick(event) {
  console.log(event.target, event.currentTarget);
}

function onMinimizeBtnClick(event) {
  event.target.parentElement.classList.toggle("minimized");
  event.target.innerText = event.target.innerText === "<" ? ">" : "<";
}

function onColorListBtnClick(event) {
  const header = document.createElement("h2");
  header.classList.add("pallette-menu__header");
  header.innerText = "Choose color pallette:";
  refs.menuContainer.replaceChildren(header, myColors.generateListMarkup());
  document.querySelectorAll(".js-pallette-name").forEach((item) => {
    item.classList.add("link");
    item.addEventListener("click", (event) => {
      const palName = event.target.dataset.palletteName;
      updateColorPanel(palName);
      hideModal();
    });
  });
  showModal();
}

function showModal() {
  refs.backdrop.classList.remove("is-hidden");
  refs.menuContainer.classList.remove("is-hidden");
}

function hideModal() {
  refs.backdrop.classList.add("is-hidden");
  refs.menuContainer.classList.add("is-hidden");
}

function updateColorPanel(palletteID) {
  refs.colorMenu = myColors.generatePalletteMarkup(palletteID);
  refs.colorPanel
    .querySelector(".js-color-pallette")
    .replaceWith(refs.colorMenu[0]);
  refs.colorPanel
    .querySelector(".pallette-name")
    .replaceWith(refs.colorMenu[1]);
  for (const colorBox of refs.colorMenu[0].children) {
    colorBox.addEventListener("click", onColorClick);
  }
  setCurrentColor(refs.colorMenu[0].children[0].style.backgroundColor);
}

function showPictureList(picArr) {
  const header = document.createElement("h2");
  header.classList.add("pallette-menu__header");
  header.innerText = "Choose a pisture:";
  const listUl = document.createElement("ul");
  listUl.classList.add("js-pallette-list");
  listUl.style =
    "display: block; margin: 0; background-color: white; color: black; padding: 0; list-style: none;";
  picArr.forEach((pic) => {
    const el = document.createElement("li");
    el.classList.add("js-svg-name");
    el.innerText = pic.name;
    el.dataset.link = pic.link;
    listUl.append(el);
  });
  refs.menuContainer.replaceChildren(header, listUl);
  document.querySelectorAll(".js-svg-name").forEach((item) => {
    item.classList.add("link");
    item.addEventListener("click", (event) =>
      changePicture(event.target.dataset.link)
    );
  });
  showModal();
}

function changePicture(picLink) {
  refs.svgimage.setAttribute("data", picLink);
  hideModal();
}

function makeFile(name) {
  let file;
  const fileData = [];
  fileData.push(refs.svgimage.contentDocument.querySelector("svg").outerHTML);
  let properties = { type: "text/plain" };
  try {
    file = new File(fileData, name, properties);
  } catch (e) {
    file = new Blob(data, properties);
  }
  const url = URL.createObjectURL(file);
  // console.log(file);
  const a = document.createElement("a");
  a.href = url;
  a.download = "kolyornytsia.svg";
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export class PalletteArchive {
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
        (a) => a.palletteName === palletteRef
      );
    } else if (typeof palletteRef === "number" && palletteRef > -1) {
      currentPallette = this.palletteArr[palletteRef];
    }

    if (currentPallette) {
      const colorUl = document.createElement("ul");
      colorUl.classList.add("js-color-pallette");
      // colorUl.style =
      //   "display: flex; margin-left: -12px; background-color: white; padding: 0; list-style: none;";
      for (const colorNum of currentPallette.colorNumArr) {
        const colorLi = document.createElement("li");
        colorLi.classList.add("js-color-box");
        colorLi.style = `background-color: #${colorNum
          .toString(16)
          .padStart(6, "0")}; --color-box-width: calc((100% / ${
          currentPallette.colorNumArr.length
        }) - 12px); --color-box-height: calc((120px / ${
          currentPallette.colorNumArr.length
        }) - 5px);`;
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
      const listItem = document.createElement("li");
      listItem.classList.add("js-pallette-name");
      listItem.dataset.palletteName = pallette.palletteName;
      listItem.innerText = pallette.palletteName;
      listUl.append(listItem);
    }
    return listUl;
  }
}

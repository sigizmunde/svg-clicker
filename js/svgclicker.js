const refs = {
  body: document.querySelector("body"),
  svgimage: document.getElementById("patternsvg"),
  loaderContainer: document.querySelector(".loader-container"),
};

// refs.body.addEventListener("click", addSvgListeners);

refs.svgimage.addEventListener("load", function () {
  addSvgListeners(refs.svgimage);
});

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

function addSvgListeners(objectEl) {
  console.log("addSvgListeners");

  //   const myLoader = new SimpleLoader(refs.loaderContainer);
  //   myLoader.initLoader();
  //   refs.loaderContainer.classList.remove("is-hidden");
  let svgDoc = objectEl.contentDocument;
  let els = svgDoc.querySelectorAll("path");
  for (let i = 0, length = els.length; i < length; i++) {
    els[i].addEventListener("click", onPatternClick);
    // myLoader.updateLoader(i, els.length);
  }
  //   myLoader.removeLoader();
  //   refs.loaderContainer.classList.add("is-hidden");
}

function onPatternClick(event) {
  console.log("onPatternClick", `target ${event.target}`);
  event.target.style.fill = "#FF8888";
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

// ========================= loader class start ======================
export class SimpleLoader {
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

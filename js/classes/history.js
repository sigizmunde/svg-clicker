export class History {
  #stack;

  constructor(length) {
    this.#stack = [];
    this.length = length;
  }

  pushStack(state) {
    try {
      this.#stack.push(state);
    } catch (err) {
      console.error(err);
      return 0;
    }
    this.watchTheLimit(this.length);
    return 1;
  }

  popStack() {
    return this.#stack.length > 0 ? this.#stack.pop() : null;
  }

  watchTheLimit(limit) {
    if (this.#stack.length > limit) {
      this.#stack.shift();
      this.watchTheLimit(limit);
    }
  }

  clearStack() {
    this.#stack = [];
  }

  getLength() {
    return this.#stack.length;
  }
}

'use strict';

class Named {
  constructor(name = 'ES2015') {
    this.name = name;
  }
}

console.log('' + new class Test extends Named {
  constructor(name) {
    super(name);
    return {
      name: this.name,
      toString() {
        return `Hello ${this.name}`;
      }
    };
  }
});
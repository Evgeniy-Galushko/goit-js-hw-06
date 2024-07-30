'use strict';
class StringBuilder {
  #value
  constructor(value) {
    this.#value = value;
  }
  getValue() {
    return this.#value
  }
  padStart(str) {
    const intermediateResult = this.#value = `${str + this.#value}` 
    return intermediateResult
  }
  padEnd(str) {
    const intermediateResult = this.#value = `${this.#value + str}` 
    return intermediateResult;
  }
  padBoth(str) {
    const result = this.#value = `${str + this.#value + str}` 
    return result
  }
}




const builder = new StringBuilder( "." );
 console. log (builder.getValue()); //"." 
builder.padStart( "^" );
 console.log (builder.getValue()); // "^." 
builder.padEnd( "^" );
 console.log (builder.getValue()); // "^.^" 
builder.padBoth( "=" );
 console.log (builder.getValue()); // "=^.^="




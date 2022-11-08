"use strict";
const hello = " Hello world!";
class DOMseletor {
    constructor(DOM) {
        this.dom = DOM;
    }
    static getElement(element) {
        return document.querySelector(element);
    }
}
const h1 = DOMseletor.getElement('h1');
console.log(h1);
const html = new DOMseletor(DOMseletor.getElement('html'));
console.log(html);

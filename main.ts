const hello: string = " Hello world!";

class DOMseletor {
dom: string
        constructor(DOM:any){
                this.dom = DOM
        }

        static getElement(element: string): null | HTMLElement {
                return document.querySelector(element);
        }

}

const h1 = DOMseletor.getElement('h1');



console.log(h1);

const html = new DOMseletor(DOMseletor.getElement('html'))

console.log(html);


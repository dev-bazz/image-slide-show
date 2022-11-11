class domMethods {
        static getElement(element) {
                return document.querySelector(element)
        }
        static getNodeList(element) {
                return document.querySelectorAll(element)
        }
}
export default domMethods
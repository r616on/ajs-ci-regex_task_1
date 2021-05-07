export default class Validator {
  static validateUsername(str) {
    const regPr1 = /^[\w-]+$/;
    const regPr2 = /^[^0-9_-]+.+[^0-9_-]$/;
    const regPr3 = /\d\d\d/;
    if (regPr1.test(str) && regPr2.test(str) && !regPr3.test(str)) {
      return true;
    }
    return false;
  }
}

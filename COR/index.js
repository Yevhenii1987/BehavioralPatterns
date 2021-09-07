class TextBlock {
  constructor(text) {
    this.text = text;
  }

  setWidth(str) {
    this.width = str;
    return this;
  }
  setHeight(str) {
    this.height = str;
    return this;
  }
  setBorder(str) {
    this.border = str;
    return this;
  }
  setBackground(str) {
    this.background = str;
    return this;
  }
}

let block1 = new TextBlock('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');

console.log(block1);

block1.setWidth('500px').setHeight('100px').setBorder('2px').setBackground('#00bb33');

console.log(block1);
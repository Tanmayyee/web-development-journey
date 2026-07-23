// This is a Constructor Function...
function Color(r, g, b) {
  // we write first letter in capital for constructor function and class
  this.red = r;
  this.green = g;
  this.blue = b;
}

//If you call it on its own like a regular function...
Color(35, 60, 190); //undefined
//It returns undefined. Seems useless!

//Adds the rgb method to the Color prototype so that all instances can share it .....
Color.prototype.rgb = function () {
  const { red, green, blue } = this;
  return `rgb(${red},${green},${blue})`;
};

Color.prototype.hex = function () {
  const { red, green, blue } = this;
  return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
 const { red, green, blue } = this;
  return `rgba(${red}, ${green}, ${blue}, ${a})`;
};

// *****************
// THE NEW OPERATOR!
// *****************

//The 'new' operator creates a new instance of an object from a consturtor func , links it to the prototype, and binds the 'this' keyword to the new object.

const newColor = new Color(20, 255, 40);

newColor.rgb();
newColor.hex();
newColor.rgba();

const secondColor = new Color(35, 150, 50);

secondColor.rgb();
secondColor.hex();
newColor.rgba();

//newColor === secondColor     ( true )

//share same prototype and methods are present in prototype of Color

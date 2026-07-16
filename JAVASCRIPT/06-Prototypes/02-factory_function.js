//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"

function makeColor(r,g,b){              //makeColor is a factory function
   
    const color={}                     //empty object 
    color.red=r;
    color.green=g;
    color.blue=b;

    color.rgb=function(){                  //methods of color object
        const {r,g,b}=this;
        return `rgb(${r},${g},${b})`
    }
    color.hex=function(){
        const {r,g,b}=this;
        return  (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
    }
    return color;
}

const newColor= makeColor(35, 255, 150);     //newColor & secondColor can be k/a objects or instance 
newColor.rgb() 
newColor.hex()

const secondColor= makeColor(45, 255, 160)
secondColor.rgb()
secondColor.hex()

//NOTE: factory functions recreate methods for every object instance, which leads to higher memory usage because methods are not shared via the prototype.

//thats why constructor function is used because they alowng with prototypes share the methods across all instances , saving memory by avoiding method recreation for every object.
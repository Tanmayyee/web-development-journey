class Color{
    constructor(r,g,b){
        this.red=r;
        this.green=g;
        this.blue=b;
    }
    innerRGB(){
        const { red, green, blue } = this;
        return `${red},${green},${blue}`
    }
    rgb(){
        return `rgb(${this.innerRGB()})`
    }
    rgba(a=1.0){
        return `rgb(${this.innerRGB()},${a})`
    }
    hex(){
        const { red, green, blue } = this;
		return (
			'#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
		);
    }
}

const firstColor = new Color(15,220,70)

// firstColor.rgb()
// firstColor.hex()

const secondColor = new Color(40,255,140)

// secondColor.rgba()
// secondColor.hex()
// secondColor.rgb()
// secondColor.rgba(a=5)


//firstColor===secondColor


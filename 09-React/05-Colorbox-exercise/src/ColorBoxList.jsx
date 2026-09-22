import ColorBox from "./ColorBox";
import './StyelColorBoxList.css'
const colors=['red','blue','green','yellow','orange','purple','pink','brown','black','slategray','aqua','violet','indigo','olive','silver','tomato']
export default function ColorBoxList(){
    return(
        <div className="StyleColorBoxList">
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
            <ColorBox colors={colors}/>
        </div>
    )
}
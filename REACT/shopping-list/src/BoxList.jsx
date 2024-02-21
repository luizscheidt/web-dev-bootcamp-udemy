import Box from "./Box"
import "./BoxList.css"

export default function BoxList({colors}){
    const boxes = []
    for(let i=0; i<25; i++){
        boxes.push(<Box colors={colors}/>)
    }
    return (
        <div className="BoxList">
            {boxes}
        </div>
    )
}
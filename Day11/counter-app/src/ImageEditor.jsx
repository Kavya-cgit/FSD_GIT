import img from "./images/photo1.jpg";
import {useState } from 'react';
 const ImageEditor = () => {
    const [width, setWidth]= useState(200);
    const [height, setHeight]= useState(200);
  return (
    <div>
        <img src={img} style={{width:`${width}px,height:${height}px`}}/>
        <button
            onClick={() => {
                setWidth(width+10);
            }}
            >
                Increase Width
            </button>
            <button
            onClick={() => {
                setHeight(height+10);
            }}
            >
                Increase Height
            </button>
            <button
            onClick={() => {
                setWidth(width-10);
            }}
            >
                Decrease Width
            </button>
            <button
            onClick={() => {
                setHeight(height-10);
            }}
            >
                Decrease Height
            </button>

    </div>
  )
}
export default ImageEditor;
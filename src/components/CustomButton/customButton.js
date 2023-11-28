import React from "react";
import "./style.css";
function CustomButton(props) {
    for (let index = 0; index < props?.arr?.length; index++) {
        // const element = array[index];
        // console.log(index)
        
    }
    console.log(props)
  return <button className="customButton">{props?.page}</button>;
}
function Add(){
    return (<p>Hello</p>)
}
function H1Head(){
    return(<h1>h1 Head</h1>)
}
export default H1Head
export {CustomButton, Add};

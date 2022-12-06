import React from "react";
import './index.css';

function Breadcrumb(props) {
    const {paths, handlePathChange} = props;

  return (
    <div className="breadcrumb">
        {paths.map((path,index)=>{
            if(index===paths.length-1){
                return <button className="textBtn">{path}</button>
            }else{
                return <>
                <button className="textBtn" onClick={()=>{handlePathChange(path)}}>{path}</button>
                <span>{">"}</span>
                </>
            }
        })}
    </div>

  );
}

export default Breadcrumb;

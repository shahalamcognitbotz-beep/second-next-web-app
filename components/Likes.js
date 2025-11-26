"use client"

import { useState } from "react";

export default function Likes(){
    const [likesCount,setLikesCount]=useState(0)
    // if(typeof localStorage !== "undefined"){
    //     console.log(localStorage);
        
    // }
    
    console.log("Like compoents");
    
    return <div onClick={()=>{setLikesCount((prev)=>prev+1);
    }}>2k Likes {likesCount}</div>
}
'use client'
 
import { useRouter } from 'next/navigation'
import React from "react";
import './Button.css'
const Button = (props) => {
  const router = useRouter()
  return (
    <div>
     <button onClick={()=>router.push("/")} className="button-48" role="button"><span className="text">{props.button_text}</span></button>
    </div>
  )
}

export default Button

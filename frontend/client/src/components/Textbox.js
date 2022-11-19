import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Textbox({building, handleClick}){
    const [cartId, setCartId] = useState(null)
    return (
        <div style={boxStyle}>
            <input style={inputStyle} type={Number} maxLength={3} onChange={(event) => setCartId(event.target.value)}></input>
            <button 
            onClick={() => handleClick(cartId, building)} 
            style={{
                ...buttonStyle,
                ...(cartId === null || cartId.toString().length === 0 ? hideButton : null)}}>{`\u2713`}</button>
        </div>
    )
}
const boxStyle = {
    border: "1px solid black",
    width: "100px",
    height: "45px",
    borderRadius: "10px",
    marginTop: "5px",
    marginBottom: "5px",
}
const inputStyle = {
    fontSize: "20px",
    width: "30px",
    border: "none",
    cursor: "pointer",
    fontFamily: "Calisto MT, serif",
    marginRight: "5px",
}
const buttonStyle = {
    fontSize: "20px",
    border: "1px solid #008CBA",
    borderRadius: "10px",
    marginLeft: "5px",
}
const hideButton = {
    visibility: "hidden"
}
export default Textbox;
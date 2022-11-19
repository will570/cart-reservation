import React, { useState } from 'react'

function Reservation({uid, cartId, handleClick}){
    const [building, setBuilding] = useState("None");
    const handleChange = (e) => {
        setBuilding(e.target.value);
    }
    const [hover, setHover] = useState(false);
    return (
        <>
        <th>{uid}</th>
        <th>{cartId}</th> 
        <th><label htmlFor="building-name"></label>
        <select 
        style={selectStyle}
        value={building} 
        onChange={handleChange}>
            <option style={optionStyle} value="None">Choose a building</option>
            <option style={optionStyle} value="De neve">De neve</option>
            <option style={optionStyle} value="Sproul">Sproul</option>
            <option style={optionStyle} value="Rieber">Rieber</option>
            <option style={optionStyle} value="Olympic">Olympic</option>
            <option style={optionStyle} value="Courtside">Courtside</option>
        </select></th>
        <th>
        <button 
        onMouseEnter={()=>{
            setHover(true);
        }} 
        onMouseLeave={()=>{
            setHover(false);
        }}
        style={{
            ...buttonStyle,
            ...(hover ? buttonHoverStyle : null)
        }}
        onClick={() => handleClick(cartId, building)}>return</button></th>
        </>
    )
}
const buttonStyle = {
    fontSize: "15px",
    border: "1px solid #008CBA",
    borderRadius: "4px",
    backgroundColor: "white",
    transitionDuration: "0.4s",
    cursor: "pointer",
    padding: "7px 10px",
    fontFamily: "Calisto MT, serif"
}
const buttonHoverStyle = {
    backgroundColor: "#87CEFA",
    color: "white"
}
const selectStyle = {
    fontSize: "15px",
    border: "1px solid #008CBA",
    borderRadius: "4px",
    fontFamily: "Calisto MT, serif",
    padding: "7px 10px"
}
const optionStyle = {
    fontSize: "15px",
    fontFamily: "Calisto MT, serif"
}
export default Reservation
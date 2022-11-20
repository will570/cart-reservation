import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Cart({cartId, removeCart, prioritizeCart}){
    const [data, setData] = useState([]);
    const [hover, setHover] = useState(false);
    const [removeHover, setRemoveHover] = useState(false);
    const [priorityHover, setPriorityHover] = useState(false);

    const handleClick = async () => {
        await axios.put(`http://localhost:8800/api/cart/setDamage/${cartId}`);
        let newData = {
            cartId: data.cartId,
            damaged: !data.damaged
        }
        setData(newData);
    }
    const getData = async () => {
        const { data } = await axios.get(`http://localhost:8800/api/cart/getCart/${cartId}`);
        setData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
            <button 
            onMouseEnter={()=>{
                setHover(true);
            }} 
            onMouseLeave={()=>{
                setHover(false);
            }}
            style={{
                ...buttonStyle,
                ...(data.damaged ? damagedStyle : undamagedStyle),
                ...(hover ? buttonHoverStyle : null)
            }}
            onClick={() => handleClick(cartId)}>
                {cartId}{data.damaged ? <button 
                    onClick={(event) => {removeCart(cartId); event.stopPropagation()}}
                    onMouseEnter={()=>{
                        setRemoveHover(true);
                    }} 
                    onMouseLeave={()=>{
                        setRemoveHover(false);
                    }} 
                    style={{
                        ...removeButtonStyle,
                        ...(removeHover ? removeButtonHoverStyle : null)}}>{`\u2717`}</button> : <button 
                    onClick={(event) => {prioritizeCart(cartId); event.stopPropagation()}}
                    onMouseEnter={()=>{
                        setPriorityHover(true);
                    }} 
                    onMouseLeave={()=>{
                        setPriorityHover(false);
                    }} 
                    style={{
                        ...priorityButtonStyle,
                        ...(priorityHover ? priorityButtonHoverStyle : null)}}>{`\u2713`}</button>}
            </button>
    )
}
const removeButtonStyle = {
    cursor: "pointer",
    backgroundColor: "rgba(0,0,0,0)",
    border: "none"
}
const removeButtonHoverStyle = {
    fontWeight: "bold"
}
const priorityButtonStyle = {
    cursor: "pointer",
    border: "none",
    backgroundColor: "rgba(0,0,0,0)"
}
const priorityButtonHoverStyle = {
    fontWeight: "bold"
}
const buttonStyle = {
    fontSize: "20px",
    border: "1px solid #008CBA",
    borderRadius: "10px",
    transitionDuration: "0.4s",
    cursor: "pointer",
    padding: "10px 25px",
    fontFamily: "Calisto MT, serif",
    marginTop: "5px",
    marginBottom: "5px"
}
const buttonHoverStyle = {
    backgroundColor: "#87CEFA",
    color: "white"
}
const undamagedStyle = {
    backgroundColor: "#98FB98"
}
const damagedStyle = {
    backgroundColor: "#D3D3D3"
}

export default Cart;
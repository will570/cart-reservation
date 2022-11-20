import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Cart({cartId}){
    const [data, setData] = useState([]);
    const [hover, setHover] = useState(false);

    const getData = async () => {
        const { data } = await axios.get(`http://localhost:8800/api/cart/getCart/${cartId}`);
        setData(data);
    };

    const handleClick = async () => {
        await axios.put(`http://localhost:8800/api/cart/setDamage/${cartId}`);
        let newData = {
            cartId: data.cartId,
            damaged: !data.damaged
        }
        setData(newData);
    }

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
                {cartId}{data.damaged ? " \u2717" : " \u2713"}
            </button>
    )
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
    backgroundColor: "#F0FFFF"
}
const damagedStyle = {
    backgroundColor: "#D3D3D3"
}

export default Cart;
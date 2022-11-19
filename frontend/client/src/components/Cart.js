import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Cart({cartId, handleClick}){
    const [data, setData] = useState([]);

    const getData = async () => {
        const { data } = await axios.get(`http://localhost:8800/api/cart/getCart/${cartId}`);
        setData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <button 
        style={{
            ...(data.damaged ? damagedStyle : undamagedStyle)
        }}
        onClick={() => handleClick(cartId)}>
            {cartId}
        </button>
    )
}
const undamagedStyle = {
    backgroundColor: "white"
}
const damagedStyle = {
    backgroundColor: "red"
}

export default Cart;
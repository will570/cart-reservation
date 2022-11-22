import axios from 'axios'
import React from 'react'
import Cart from './Cart'
import Textbox from './Textbox'
import ReactDOM from 'react-dom/client';

class CartList extends React.Component{
    state = {
        building: [],
    }
    componentDidMount = async() =>{
        axios.get("http://localhost:8800/api/building/getAll").then(res =>{
            const building = res.data;
            this.setState({ building })
        })
    }
    handleClick = async (cartId, buildingName) => {
        const newCart = {
            cartId: cartId,
            damaged: false
        }
        try {
            await axios.post("http://localhost:8800/api/cart/addCart", newCart).then(res=>{
            })
            await axios.put(`http://localhost:8800/api/building/addCart/${buildingName}/${cartId}`).then(res=>{
            })
            let building = [...this.state.building]
            for (let i = 0; i < this.state.building.length; i++){
                if(this.state.building[i].name === buildingName){
                    building[i].carts.push(cartId);
                }
            }
            this.setState({ building })
        } catch (err) {
            alert("cartId exist")
        }
    }
    removeCart = async (cartId) => {
        let building = [...this.state.building]
        let buildingName;
        for (let i = 0; i < building.length; i++){
            for (let j = 0; j < building[i].carts.length; j++){
                if (building[i].carts[j] === cartId){
                    buildingName = building[i].name;
                }
            }
        }
        await axios.put(`http://localhost:8800/api/building/removeCart/${buildingName}/${cartId}`);
        await axios.delete(`http://localhost:8800/api/cart/removeCart/${cartId}`);
        window.location.reload(false);
    }
    prioritizeCart = async (cartId) => {
        let building = [...this.state.building]
        let buildingName;
        for (let i = 0; i < building.length; i++){
            for (let j = 0; j < building[i].carts.length; j++){
                if (building[i].carts[j] === cartId){
                    buildingName = building[i].name;
                    break;
                }
            }
        }
        await axios.put(`http://localhost:8800/api/building/prioritizeCart/${buildingName}/${cartId}`);
        window.location.reload(false);
    }
    
    render() {
        return (
            <>
            <style>{`
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th {
                    font-family: "Calisto MT", serif;
                    height: 40px;
                    font-size: 15px;
                }
                td {
                    text-align: center;
                }
                th, td{
                    padding: 5px;
                    border-bottom: 1px solid #ddd;
                }
            `}
            </style>
            <div style={wrapStyle}>
                <table>
                    <tr style={headStyle}>
                        {this.state.building.map(b => <th key={b._id}>{b.name}</th>)}
                    </tr>
                    <tbody style={bodyStyle}>
                        {this.state.building.map(b => <th key={b._id}>
                            {b.carts.map(cid => <div style={boxStyle} key={cid._id}><Cart cartId={cid} removeCart={this.removeCart.bind(this)} prioritizeCart={this.prioritizeCart.bind(this)}/></div>)}
                            {<div style={boxStyle}><Textbox building={b.name} handleClick={this.handleClick.bind(this)}/></div>}
                        </th>)}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}
const headStyle = {
    background: "#E0FFFF"
}
const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const bodyStyle = {
    verticalAlign: "top"
}
const wrapStyle = {
    width: "65%",
    margin: "0 auto",
    border: "2px solid",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 0.2), 0 9px 30px 0 rgba(0, 0, 0, 0.19)",
}

export default CartList
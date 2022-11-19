import axios from 'axios'
import React from 'react'
import Cart from './Cart'

class ReservationList extends React.Component{
    state = {
        building: []
    }
    handleClick(cartId){
        axios.put(`http://localhost:8800/api/cart/setDamage/${cartId}`);
        console.log("CLICK");
    }

    componentDidMount(){
        axios.get("http://localhost:8800/api/building/getAll").then(res =>{
            const building = res.data;
            this.setState({ building })
        })
    }

    render(){
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
                    font-size: 20px;
                }
                td {
                    text-align: center;
                }
                th, td{
                    padding: 5px;
                    border-bottom: 1px solid #ddd;
                }

                thead {
                    background: #E0FFFF;
                }
            `}
            </style>
            <div style={wrapStyle}>
                <table>
                    <thead>
                        {this.state.building.map(b => <th key={b._id}>{b.name}</th>)}
                    </thead>
                    <tbody style={bodyStyle}>
                        {this.state.building.map(b => <th key={b._id}>
                            {b.carts.map(cid => <tr  style={boxStyle} key={cid._id}><Cart cartId={cid} handleClick={this.handleClick} /></tr>)}
                        </th>)}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
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
export default ReservationList
import axios from 'axios'
import React from 'react'
import Reservation from './Reservation'

class ReservationList extends React.Component{
    state = {
        reservation: []
    }
    handleClick(cartId, building){
        if (building !== "None"){
            axios.put(`http://localhost:8800/api/reservation/returnCart/${building}/${cartId}`);
            let reservation = [];
            for(let i = 0; i < this.state.reservation.length; i++){
                if (cartId !== this.state.reservation[i].cartId){
                    reservation.push(this.state.reservation[i])
                }
            }
            this.setState({reservation})
        }
        else{
            alert("Must choose a building")
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8800/api/reservation/getAll").then(res =>{
            const reservation = res.data;
            this.setState({ reservation })
        })
    }

    render(){
        const wrapStyle = {
            width: "65%",
            margin: "0 auto",
            border: "2px solid",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 0.2), 0 9px 30px 0 rgba(0, 0, 0, 0.19)"
        }
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
                }
                td {
                    text-align: center;
                }
                th, td{
                    padding: 5px;
                    border-bottom: 1px solid #ddd
                }
                tr:nth-child(even) {background-color: #f2f2f2;}
                tr:hover {background-color: #ddd;}
            `}
            </style>
                <div style={wrapStyle}>
                    <table>
                        <tr style={headStyle}>                 
                            <th>Student UID</th>
                            <th>Cart ID</th>
                            <th>Building</th>
                            <th>Return</th>
                        </tr>
                        <tbody>
                            {this.state.reservation.map(rsv => <tr key={rsv.cartId}><Reservation uid={rsv.uid} cartId={rsv.cartId} handleClick={this.handleClick.bind(this)}/></tr>)}
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
export default ReservationList
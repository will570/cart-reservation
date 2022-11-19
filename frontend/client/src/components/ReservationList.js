import axios from 'axios'
import React from 'react'
import Reservation from './Reservation'

class ReservationList extends React.Component{
    state = {
        reservation: []
    }
    handleClick(cartId, building){
        axios.put(`http://localhost:8800/api/reservation/returnCart/${building}/${cartId}`)
        console.log(`${cartId} returned to ${building}`)
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

                thead {
                    background: #E0FFFF;
                }
            `}
            </style>
                <div style={wrapStyle}>
                    <table>
                        <thead>                 
                            <th>Cart Id</th>
                            <th>Student UID</th>
                            <th>Building</th>
                            <th>Return</th>
                        </thead>
                        <tbody>
                            {this.state.reservation.map(rsv => <tr key={rsv.cartId}><Reservation uid={rsv.uid} cartId={rsv.cartId} handleClick={this.handleClick}/></tr>)}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
export default ReservationList
import axios from 'axios'
import React from 'react'
import Cart from './Cart'

class ReservationList extends React.Component{
    state = {
        building: []
    }
    // handleClick(cartId, building){
    //     axios.put(`http://localhost:8800/api/reservation/returnCart/${building}/${cartId}`)
    //     console.log(`${cartId} returned to ${building}`)
    // }
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
            <table>
                <thead>
                    {this.state.building.map(b => <th key={b._id}>{b.name}</th>)}
                </thead>
                <tbody>
                    {this.state.building.map(b => <th key={b._id}>
                        {b.carts.map(cid => <tr key={cid._id}><Cart cartId={cid} handleClick={this.handleClick} /></tr>)}
                    </th>)}
                </tbody>
            </table>
            </>
        )
    }
}
export default ReservationList
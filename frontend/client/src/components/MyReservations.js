import React, {useEffect, useState} from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

function MyReservations(){
    const { auth } = useAuth();
    const [data, setData] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(`http://localhost:8800/api/reservation/getUser/${auth.uid}`);
        setData(data);
    };

    useEffect(() => {
        getData();
    }, []);
    return(
        <div>
        <p>My Cart:</p>
        <table>
        {data.map(res => <tr>
        <th>{res.cartId}</th>
        </tr>)}
        </table>
        </div>
    )
}
export default MyReservations
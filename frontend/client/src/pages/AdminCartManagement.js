import React from 'react'
import CartList from '../components/CartList'
import Header from '../components/Header'

function AdminCartManagement(){
    return (
        <>
        <Header reservationPage={false}/>
        <CartList />
        </>
    )
}

export default AdminCartManagement
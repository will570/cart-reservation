import React from 'react'
import ReservationList from '../components/ReservationList'
import Header from '../components/Header'

function AdminReservationTable(){
    return (
        <>
        <Header reservationPage={true} />
        <ReservationList />
        </>
    )
}

export default AdminReservationTable
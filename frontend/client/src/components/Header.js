import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Header = ({ reservationPage }) => {
  const [reservationHover, setReservationHover] = useState(false);
  const [cartHover, setCartHover] = useState(false);
  return (
    <header>
      <div style={boxStyle}>
      <Link to="/admin/reservationTable">
        <button         
        onMouseEnter={()=>{
            setReservationHover(true);
        }} 
        onMouseLeave={()=>{
            setReservationHover(false);
        }}
        style={{
            ...buttonStyle,
            ...(reservationHover || reservationPage ? buttonHoverStyle : null)
        }}>Reservation Table</button>
      </Link>
      <Link to="/admin/cartManagement">
        <button         
        onMouseEnter={()=>{
            setCartHover(true);
        }} 
        onMouseLeave={()=>{
            setCartHover(false);
        }}
        style={{
            ...buttonStyle,
            ...(cartHover || !reservationPage ? buttonHoverStyle : null)
        }}>Cart Management</button>
      </Link>
      </div>
    </header>
  )
}
const buttonStyle = {
  fontSize: "20px",
  fontFamily: "Calisto MT, serif",
  textAlign: "center",
  padding: "15px 20px",
  border: "1px solid black",
  borderRadius: "10px",
  backgroundColor: "white",
  cursor: "pointer",
  transitionDuration: "0.4s",
  boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 0.2), 0 9px 30px 0 rgba(0, 0, 0, 0.19)",
  marginLeft: "5%",
  marginRight: "5%",
  marginTop: "2%",
  marginBottom: "2%"
}
const buttonHoverStyle = {
  backgroundColor: "#87CEFA",
  color: "white"
}
const boxStyle = {
  textAlign: "center"
}
export default Header
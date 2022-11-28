import React, {useEffect, useState} from 'react';
import {Typography, Accordion, AccordionDetails, AccordionSummary, Grid} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useTheme, useMediaQuery, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@mui/material'
import Building from './building';
import axios from 'axios';

function Dropdown() {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    
    
    
    /* Dialog BoxImplementations */
    const [open, setOpen] = React.useState(false);
    const [messageTitle, setMessageTitle] = React.useState("");
    const [userMessage, setUserMessage] = React.useState("");
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClose = () => {
      setOpen(false);
    };


    /* Auxilary Implementations for Setting Building Data */
    const [dataDeNeve, setDataDeNeve] = useState([]);
    const [dataSproul, setDataSproul] = useState([]);
    const [dataRieber, setDataRieber] = useState([]);
    const [dataHedrick, setDataHedrick] = useState([]);
    const [deNeveHover, setDeNeveHover] = useState(false);
    const [sproulHover, setSproulHover] = useState(false);
    const [rieberHover, setRieberHover] = useState(false);
    const [hedrickHover, setHedrickHover] = useState(false);



    const getNumCarts = async (setHallData, name) => {
      console.log(name);
        const { data } = await axios.get(`http://localhost:8800/api/building/getNum/${name}`);
        setHallData(data);
    };
    useEffect(() => {
      getNumCarts(setDataDeNeve, 'De Neve Plaza');
      getNumCarts(setDataSproul, 'Sproul Hall');
      getNumCarts(setDataRieber, 'Rieber Court');
      getNumCarts(setDataHedrick, 'Hedrick Court');
  }, []);

  const handleClick = async (buildingName, uid) => {
    try{
      let cartId;
      await axios.put(`http://localhost:8800/api/reservation/reserveCart/${buildingName}/${uid}`).then(res => {
        cartId = res.data
        if(cartId === "no cart available"){
          setMessageTitle("Reservation Failure");
          setUserMessage(`No carts available at ${buildingName}`);
          setOpen(true);
          // alert(`No carts available at ${buildingName}`);
          return;
        }
        else if(buildingName === "De Neve Plaza"){
          setDataDeNeve(dataDeNeve - 1);
        }
        else if(buildingName === "Sproul Hall"){
          setDataSproul(dataSproul - 1);
        }
        else if(buildingName === "Rieber Court"){
          setDataRieber(dataRieber - 1);
        }
        else if(buildingName === "Hedrick Court"){
          setDataHedrick(dataHedrick - 1);
        }
        setMessageTitle("Confirmation \n(Please take a screenshot of this confirmation!)");
        setUserMessage("Successfully reserved the cart at " + buildingName + `.\nYour Cart ID is ${cartId}.`);
        setOpen(true);
        //alert("Successfully reserved the cart at " + buildingName + `\nYour cartID is ${cartId}`);
      })
    } catch (err){
      setMessageTitle("Reservation Error");
      setUserMessage(err.message);
      setOpen(true);
      // alert(err)
    }
  };

    return (
      <div>
        <Grid>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              onMouseEnter={()=>{
                setDeNeveHover(true);
              }} 
              onMouseLeave={()=>{
                setDeNeveHover(false);
              }} 
              style={{
                ...outerBoxStyle,
                ...(deNeveHover ? hoverStyle : null)}}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Typography component="h2" style={outerTextStyle}>
                    De Neve Plaza
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography component="h2" style={{
                    ...outerTextStyle,
                    ...(dataDeNeve > 5 ? plentyStyle : null),
                    ...(dataDeNeve > 0 && dataDeNeve <= 5 ? lessStyle : null),
                    ...(dataDeNeve === 0 ? noStyle : null)
                  }}> {dataDeNeve}</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Building name="De Neve Plaza" n_carts={dataDeNeve} handleClick={handleClick}/>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              onMouseEnter={()=>{
                setSproulHover(true);
              }} 
              onMouseLeave={()=>{
                setSproulHover(false);
              }} 
              style={{
                ...outerBoxStyle,
                ...(sproulHover ? hoverStyle : null)}}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Typography component="h2" style={outerTextStyle}>
                    Sproul Hall
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography component="h2"  style={{
                    ...outerTextStyle,
                    ...(dataSproul > 5 ? plentyStyle : null),
                    ...(dataSproul > 0 && dataSproul <= 5 ? lessStyle : null),
                    ...(dataSproul === 0 ? noStyle : null)
                  }}> {dataSproul}</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Building name="Sproul Hall" n_carts={dataSproul} handleClick={handleClick}/>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              onMouseEnter={()=>{
                setRieberHover(true);
              }} 
              onMouseLeave={()=>{
                setRieberHover(false);
              }} 
              style={{
                ...outerBoxStyle,
                ...(rieberHover ? hoverStyle : null)}}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Typography component="h2" style={outerTextStyle}>
                    Rieber Court
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography component="h2"  style={{
                    ...outerTextStyle,
                    ...(dataRieber > 5 ? plentyStyle : null),
                    ...(dataRieber > 0 && dataRieber <= 5 ? lessStyle : null),
                    ...(dataRieber === 0 ? noStyle : null)
                  }}> {dataRieber}</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Building name="Rieber Court" n_carts={dataRieber} handleClick={handleClick}/>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              onMouseEnter={()=>{
                setHedrickHover(true);
              }} 
              onMouseLeave={()=>{
                setHedrickHover(false);
              }} 
              style={{
                ...outerBoxStyle,
                ...(hedrickHover ? hoverStyle : null)}}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Typography component="h2" style={outerTextStyle}>
                    Hedrick Court
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography component="h2"  style={{
                    ...outerTextStyle,
                    ...(dataHedrick > 5 ? plentyStyle : null),
                    ...(dataHedrick > 0 && dataHedrick <= 5 ? lessStyle : null),
                    ...(dataHedrick === 0 ? noStyle : null)
                  }}> {dataHedrick}</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Building name="Hedrick Court" n_carts={dataHedrick} handleClick={handleClick}/>
            </AccordionDetails>
          </Accordion>
        </Grid>
      
        <Dialog
          fullScreen={fullScreen}
          open={open}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {messageTitle}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
            {userMessage}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  const outerBoxStyle = {
    border: "1px solid black",
    borderRadius: "10px",
    transitionDuration: "0.4s"
  }
  const outerTextStyle = {
    fontFamily: "Roboto, sans-serif",
    fontSize: "20px"
  }
  const hoverStyle = {
    backgroundColor: "#87CEFA",
  }
  const plentyStyle = {
    fontSize: "25px",
    color: "#006400"
  }
  const lessStyle = {
    fontSize: "25px",
    color: "#FF8C00"
  }
  const noStyle = {
    fontSize: "25px",
    color: "#B22222"
  }
  export default Dropdown;
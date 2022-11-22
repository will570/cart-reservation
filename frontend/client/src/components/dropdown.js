import React, {useEffect, useState} from 'react';
import {Typography, Accordion, AccordionDetails, AccordionSummary, Grid} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Building from './building';
import axios from 'axios';

function Dropdown() {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    
    
    const [dataDeNeve, setDataDeNeve] = useState([]);
    const [dataSproul, setDataSproul] = useState([]);
    const [dataRieber, setDataRieber] = useState([]);
    const [dataHedrick, setDataHedrick] = useState([]);
    const getNumCarts = async (setHallData, name) => {
      console.log(name);
        const { data } = await axios.get(`http://localhost:8800/api/building/getNum/${name}`);
        setHallData(data);
    };
    useEffect(() => {
      getNumCarts(setDataDeNeve, 'De Neve Plaza');
      getNumCarts(setDataSproul, 'Sproul Plaza');
      getNumCarts(setDataRieber, 'Rieber Court');
      getNumCarts(setDataHedrick, 'Hedrick Court');
  }, []);

  const handleClick = async (buildingName, uid) => {
    try{
      let cartId;
      await axios.put(`http://localhost:8800/api/reservation/reserveCart/${buildingName}/${uid}`).then(res => {
        cartId = res.data
        console.log(cartId);
        if(cartId == "no cart available"){
          alert(`No carts available at ${buildingName}`);
          return;
        }
        else if(buildingName === "De Neve Plaza"){
          setDataDeNeve(dataDeNeve - 1);
        }
        else if(buildingName === "Sproul Plaza"){
          setDataSproul(dataSproul - 1);
        }
        else if(buildingName === "Rieber Court"){
          setDataRieber(dataRieber - 1);
        }
        else if(buildingName === "Hedrick Court"){
          setDataHedrick(dataHedrick - 1);
        }
        alert("Successfully reserved the cart at " + buildingName + `\nYour cartId is ${cartId}`);
      })
    } catch (err){
      alert(err)
    }
  };
    return (
      <div>
        <Grid>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Typography component="h2">
                    De Neve Plaza
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography component="h2"> {dataDeNeve}</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Building name="De Neve Plaza" n_carts={dataDeNeve} handleClick={handleClick}/>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Typography component="h2">
                    Sproul Plaza
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography component="h2"> {dataSproul}</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Building name="Sproul Plaza" n_carts={dataSproul} handleClick={handleClick}/>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Typography component="h2">
                    Rieber Court
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography component="h2"> {dataRieber}</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Building name="Rieber Court" n_carts={dataRieber} handleClick={handleClick}/>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Typography component="h2">
                    Hedrick Court
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography component="h2"> {dataHedrick}</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Building name="Hedrick Court" n_carts={dataHedrick} handleClick={handleClick}/>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </div>
    );
  }

  export default Dropdown;
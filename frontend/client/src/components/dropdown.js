import React from 'react';
import {Typography, Accordion, AccordionDetails, AccordionSummary, Grid} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Building from './building';

function Dropdown() {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <Typography component="h2">
                  De Neve
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography component="h2"> 20</Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Building name="De Neve" n_carts={20}/>
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
                  Sproul
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography component="h2"> 20</Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Building name="Sproul" n_carts={20}/>
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
                  Rieber
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography component="h2"> 20</Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Building name="Rieber" n_carts={20}/>
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
                  Hedrick
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography component="h2"> 20</Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Building name="Hedrick" n_carts={20}/>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

  export default Dropdown;
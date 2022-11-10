import React from 'react';
import {Typography, Accordion, AccordionDetails, AccordionSummary} from '@material-ui/core';
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
            <Typography component="h2" sx={{ width: '33%', flexShrink: 0 }}>
              De Neve
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>: 20</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Building/>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Sproul</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              : 20
            </Typography>
          </AccordionSummary>
          <AccordionDetails>

          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Rieber
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              : 20
            </Typography>
          </AccordionSummary>
          <AccordionDetails>

          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Hedrick</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              : 20
            </Typography>
          </AccordionSummary>
          <AccordionDetails>

          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

  export default Dropdown;
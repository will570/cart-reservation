import React from 'react'; 

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function SidebarLink({text, Icon, route, handleClick}) {

    return (
        <div>
            <Button 
                variant="outlined" 
                startIcon={<Icon />} 
                component={Link} to={route}
                size="small"
                style={textStyle}
            >
                {text} 
            </Button>
        </div>
    ); 
}

const textStyle = {
    fontFamily: 'Roboto, sans-serif'
}
export default SidebarLink; 
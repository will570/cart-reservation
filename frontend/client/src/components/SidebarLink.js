import React from 'react'; 

import Button from '@mui/material/Button';


function SidebarLink({text, Icon}) {

    return (
        <div>
            <Button variant="outlined" startIcon={<Icon />} size="small">
                {text} 
            </Button>
        </div>
    ); 
}

export default SidebarLink; 
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import InfoIcon from '@mui/icons-material/Info';

export const MenuList=()=>{
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AccountCircleIcon/>
        </ListItemIcon>
        <ListItemText primary="My Account" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AllInclusiveIcon/>
            </ListItemIcon>
            <ListItemText primary="View Details" />
          </ListItemButton>
        </List>
      </Collapse>  

      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Myday" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <ContentPasteGoIcon/>
        </ListItemIcon>
        <ListItemText primary="Upcoming Tasks" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <ContentPasteSearchIcon/>
        </ListItemIcon>
        <ListItemText primary="Completed Tasks" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <ContentPasteOffIcon/>
        </ListItemIcon>
        <ListItemText primary="Incompleted Tasks" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <InfoIcon/>
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItemButton>
      
      
    </List>
  );
}
